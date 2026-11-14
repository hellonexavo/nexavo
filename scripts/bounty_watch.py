#!/usr/bin/env python3
"""YY Builds: no-deposit bounty discovery. Read-only; no wallets or bids."""
import datetime as dt
import json
import os
import pathlib
import urllib.request

API = "https://make.fun/api/competitions"
OUT = pathlib.Path(os.getenv("BOUNTY_REPORT_PATH", "data/open-bounties.json"))

def check():
    req = urllib.request.Request(API, headers={"User-Agent": "YYBuilds-BountyWatch/1.0", "Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=20) as r:
        data = json.load(r)
    now = dt.datetime.now(dt.timezone.utc)
    results = []
    for item in data.get("items", []):
        try:
            deadline = dt.datetime.fromisoformat(item["deadline"].replace("Z", "+00:00"))
            if deadline <= now or float(item.get("entryFeesUsd") or 0) != 0:
                continue
            slug = item["slug"]
            results.append({
                "title": item["title"],
                "url": "https://make.fun/bounty/" + slug,
                "slug": slug, "deadline": item["deadline"],
                "prize_pool_usdc": item.get("rewardAmount"),
                "submissions": item.get("submissionCount"),
                "prerequisites_url": f"https://make.fun/api/competitions/{slug}/requirements",
                "status": "OPEN_UNVERIFIED_PREREQUISITES",
            })
        except (ValueError, KeyError, TypeError):
            continue
    results.sort(key=lambda x: x["deadline"])
    return {"checked_at_utc": now.isoformat(), "source": API,
            "open_free_entry_count": len(results), "bounties": results}

if __name__ == "__main__":
    report = check()
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(json.dumps(report, indent=2, ensure_ascii=False) + "\n")
    print(f"Found {report['open_free_entry_count']} open zero-fee bounties.")
