import json
import threading
import unittest
from http.client import HTTPConnection
from http.server import ThreadingHTTPServer
from router import MODELS, Router, handler_factory

class RouterTests(unittest.TestCase):
    def test_ten_providers(self):
        self.assertEqual(len({x["provider"] for x in MODELS}), 10)
    def test_best_model(self):
        self.assertEqual(Router().route("hi")["provider"], "p1")
    def test_failover(self):
        r = Router(failures={"p1": 1})
        v = r.route("test")
        self.assertEqual(v["provider"], "p2")
        self.assertEqual(v["attempted"], ["p1", "p2"])
    def test_no_eligible_model(self):
        with self.assertRaises(ValueError):
            Router().route("hi", ["unavailable"])
    def test_report(self):
        r = Router()
        for i in range(20):
            r.route("task " + str(i))
        self.assertEqual(r.report()["successful_requests"], 20)
    def test_concurrent_report(self):
        r=Router()
        threads=[threading.Thread(target=lambda: r.route("hi")) for _ in range(20)]
        for t in threads: t.start()
        for t in threads: t.join()
        self.assertEqual(r.report()["served_requests"],20)

class ApiTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.router=Router(failures={"p1": 1})
        cls.server=ThreadingHTTPServer(("127.0.0.1",0),handler_factory(cls.router))
        cls.thread=threading.Thread(target=cls.server.serve_forever,daemon=True)
        cls.thread.start()
    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
    def post(self, path, body):
        c=HTTPConnection("127.0.0.1",self.server.server_address[1],timeout=3)
        c.request("POST",path,json.dumps(body),{"Content-Type":"application/json"})
        r=c.getresponse();status=r.status;data=json.loads(r.read());c.close()
        return status,data
    def test_openai_compatible(self):
        self.router.failures["p1"] = 1
        status,data=self.post("/v1/chat/completions",{"messages":[{"role":"user","content":"hello"}]})
        self.assertEqual(status,200)
        self.assertEqual(data["object"],"chat.completion")
        self.assertEqual(data["routing"]["attempted"],["p1","p2"])
    def test_anthropic_compatible(self):
        status,data=self.post("/v1/messages",{"messages":[{"role":"user","content":"hello"}]})
        self.assertEqual(status,200)
        self.assertEqual(data["type"],"message")
        self.assertEqual(data["content"][0]["type"],"text")
    def test_invalid_body(self):
        status,_=self.post("/v1/messages",{"messages":[]})
        self.assertEqual(status,400)
if __name__ == "__main__":
    unittest.main()
