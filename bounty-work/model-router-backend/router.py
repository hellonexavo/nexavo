"""Original zero-dependency mock provider router implementing two common chat APIs.

This is a locally runnable implementation, NOT a verified contest entry.
Every provider is simulated: no claim of access to commercial model APIs.
"""
import json
import os
import threading
import time
import uuid
from dataclasses import dataclass, field
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Any

MODELS = [
    {"name": "free-01", "provider": "p1", "quality": 92, "context": 128000, "abilities": ["text", "code"], "latency": 40},
    {"name": "free-02", "provider": "p2", "quality": 88, "context": 100000, "abilities": ["text", "code"], "latency": 30},
    {"name": "free-03", "provider": "p3", "quality": 86, "context": 96000, "abilities": ["text", "code", "vision"], "latency": 80},
    {"name": "free-04", "provider": "p4", "quality": 84, "context": 128000, "abilities": ["text", "code"], "latency": 20},
    {"name": "free-05", "provider": "p5", "quality": 81, "context": 64000, "abilities": ["text", "vision"], "latency": 25},
    {"name": "free-06", "provider": "p6", "quality": 80, "context": 32000, "abilities": ["text", "code"], "latency": 15},
    {"name": "free-07", "provider": "p7", "quality": 78, "context": 32000, "abilities": ["text"], "latency": 12},
    {"name": "free-08", "provider": "p8", "quality": 76, "context": 16384, "abilities": ["text", "code"], "latency": 8},
    {"name": "free-09", "provider": "p9", "quality": 73, "context": 8192, "abilities": ["text"], "latency": 6},
    {"name": "free-10", "provider": "p10", "quality": 70, "context": 8192, "abilities": ["text"], "latency": 4},
]

class ProviderRefused(RuntimeError):
    pass

@dataclass
class Router:
    catalog: list[dict] = field(default_factory=lambda: [dict(x) for x in MODELS])
    failures: dict[str, int] = field(default_factory=dict)
    usage: list[dict] = field(default_factory=list)
    lock: Any = field(default_factory=threading.Lock, repr=False)

    def eligible(self, prompt: str, required: list[str] | None = None):
        required = required or ["text"]
        needed = max(1, len(prompt) // 4)
        return sorted(
            [m for m in self.catalog if needed <= m["context"] and set(required).issubset(set(m["abilities"]))],
            key=lambda m: (-m["quality"], m["latency"], m["name"])
        )

    def _simulate(self, model: dict, prompt: str):
        with self.lock:
            remaining = self.failures.get(model["provider"], 0)
            if remaining > 0:
                self.failures[model["provider"]] = remaining - 1
                raise ProviderRefused("provider refused request")
        return "Simulated reply from " + model["name"] + ": " + prompt[:150]

    def route(self, prompt: str, required: list[str] | None = None):
        options = self.eligible(prompt, required)
        if not options:
            raise ValueError("no model meets request requirements")
        attempts = []
        for model in options:
            try:
                text = self._simulate(model, prompt)
                result = {"model": model["name"], "provider": model["provider"],
                          "content": text, "attempted": attempts + [model["provider"]],
                          "simulated": True}
                with self.lock:
                    self.usage.append({"provider": model["provider"], "attempts": result["attempted"], "ok": True})
                return result
            except ProviderRefused:
                attempts.append(model["provider"])
        with self.lock:
            self.usage.append({"attempts": attempts, "ok": False})
        raise ProviderRefused("all eligible providers refused")

    def report(self):
        with self.lock:
            return {"catalog": self.catalog, "served_requests": len(self.usage),
                    "successful_requests": sum(int(r["ok"]) for r in self.usage),
                    "routing_history": list(self.usage)}

def _text(messages):
    return "\n".join(
        p.get("text", "") if isinstance(p, dict) else str(p)
        for m in messages for p in (
            m.get("content", []) if isinstance(m.get("content"), list) else [m.get("content", "")]
        )
    )

def handler_factory(router: Router):
    class Handler(BaseHTTPRequestHandler):
        def _send(self, status: int, data):
            body = json.dumps(data).encode("utf-8")
            self.send_response(status)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self):
            if self.path in ("/catalog", "/v1/models"):
                self._send(200, router.report())
            elif self.path == "/health":
                self._send(200, {"ok": True, "simulated": True})
            else:
                self._send(404, {"error": "not found"})

        def do_POST(self):
            if self.path not in ("/v1/chat/completions", "/v1/messages"):
                self._send(404, {"error": "not found"})
                return
            try:
                n = int(self.headers.get("Content-Length", "0"))
                if n <= 0 or n > 1024 * 1024:
                    self._send(413, {"error": "request body missing or too large"})
                    return
                payload = json.loads(self.rfile.read(n))
                prompt = _text(payload.get("messages", []))
                if not isinstance(payload.get("messages"), list) or not prompt:
                    raise ValueError("messages must be a nonempty array")
                required = payload.get("required_capabilities", ["text"])
                if not isinstance(required, list) or any(x not in ("text", "code", "vision") for x in required):
                    raise ValueError("invalid capabilities")
                routed = router.route(prompt, required)
                now = int(time.time())
                ident = str(uuid.uuid4())
                if self.path == "/v1/chat/completions":
                    self._send(200, {"id": "chatcmpl-" + ident, "object": "chat.completion", "created": now,
                                     "model": routed["model"], "choices": [{"index": 0, "finish_reason": "stop",
                                     "message": {"role": "assistant", "content": routed["content"]}}],
                                     "routing": {"provider": routed["provider"], "attempted": routed["attempted"], "simulated": True}})
                else:
                    self._send(200, {"id": "msg-" + ident, "type": "message", "role": "assistant",
                                     "model": routed["model"], "content": [{"type": "text", "text": routed["content"]}],
                                     "stop_reason": "end_turn", "usage": {"input_tokens": 0, "output_tokens": 0},
                                     "routing": {"provider": routed["provider"], "attempted": routed["attempted"], "simulated": True}})
            except ValueError as e:
                self._send(400, {"error": str(e)})
            except ProviderRefused:
                self._send(503, {"error": "all eligible simulated providers refused"})
            except (TypeError, KeyError, json.JSONDecodeError):
                self._send(400, {"error": "invalid request"})

        def log_message(self, format, *args):
            pass
    return Handler

if __name__ == "__main__":
    srv = ThreadingHTTPServer(("127.0.0.1", int(os.environ.get("PORT", 8080))), handler_factory(Router()))
    print("Mock model router listening on 127.0.0.1:" + str(srv.server_address[1]), flush=True)
    srv.serve_forever()
