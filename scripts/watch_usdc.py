#!/usr/bin/env python3
"""Read-only Solana USDC mainnet balance monitor: never loads private keys."""
import datetime as dt
import json
import os
from pathlib import Path
from urllib.request import Request, urlopen

OWNER = "EF87YcCL58nMBvEqXhXnusRa9jZBUM6xhAh8NQ9fEWLF"
USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
RPC = os.environ.get("SOLANA_RPC_URL", "https://api.mainnet-beta.solana.com")
STATE = Path(os.environ.get("USDC_MONITOR_STATE", "data/usdc-solana-state.json"))

def rpc_call(url=RPC):
    data = {"jsonrpc": "2.0", "id": 1, "method": "getTokenAccountsByOwner", "params": [OWNER, {"mint": USDC_MINT}, {"encoding": "jsonParsed", "commitment": "finalized"}]}
    req = Request(url, json.dumps(data).encode(), {"Content-Type": "application/json", "User-Agent": "YYBuilds-USDC-Monitor/1.0"})
    with urlopen(req, timeout=25) as resp:
        result = json.load(resp)
    if "error" in result or "result" not in result or not isinstance(result["result"].get("value"), list):
        raise ValueError("Solana RPC failed or returned an invalid result")
    return result["result"]

def balance_from_rpc(result):
    total, accounts = 0, []
    for item in result["value"]:
        info = item["account"]["data"]["parsed"]["info"]
        if info["mint"] != USDC_MINT or info["owner"] != OWNER:
            raise ValueError("Unexpected token account owner or mint")
        amount = info["tokenAmount"]
        if int(amount["decimals"]) != 6:
            raise ValueError("Unexpected native USDC decimals")
        total += int(amount["amount"])
        accounts.append(item["pubkey"])
    return total, accounts

def build_snapshot(result, previous=None, checked_at=None):
    amount, accounts = balance_from_rpc(result)
    prev = None if not previous else int(previous["raw_usdc_micro"])
    delta = None if prev is None else amount - prev
    return {"wallet": OWNER, "chain": "solana-mainnet", "mint": USDC_MINT, "decimals": 6,
            "raw_usdc_micro": str(amount), "balance_usdc": f"{amount // 1000000}.{amount % 1000000:06d}",
            "previous_micro": None if prev is None else str(prev),
            "delta_micro": None if delta is None else str(delta),
            "new_inflow_usdc": f"{delta // 1000000}.{delta % 1000000:06d}" if delta is not None and delta > 0 else None,
            "token_accounts": accounts, "slot": result["context"]["slot"],
            "checked_at_utc": checked_at or dt.datetime.now(dt.timezone.utc).isoformat(),
            "note": "Balance delta is not proof of any particular transfer or earned income; verify transaction separately."}

def main():
    result = rpc_call()  # Fetch before touching state. RPC failures cannot become zeros.
    previous = json.loads(STATE.read_text()) if STATE.exists() else None
    snapshot = build_snapshot(result, previous)
    changed = previous is None or previous["raw_usdc_micro"] != snapshot["raw_usdc_micro"]
    if changed:
        STATE.parent.mkdir(parents=True, exist_ok=True)
        STATE.write_text(json.dumps(snapshot, indent=2) + "\n")
    print(json.dumps({"changed": changed, "balance_usdc": snapshot["balance_usdc"],
                      "new_inflow_usdc": snapshot["new_inflow_usdc"], "slot": snapshot["slot"]}))

if __name__ == "__main__":
    main()
