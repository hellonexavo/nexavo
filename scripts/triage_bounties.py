#!/usr/bin/env python3
"""Rank *potential* no-deposit USDC programming bounties. Never claims or submits."""
import datetime as dt
import json
import os
from pathlib import Path

SOURCE = Path(os.getenv("BOUNTY_REPORT_PATH", "data/open-bounties.json"))
DEST = Path(os.getenv("BOUNTY_QUEUE_PATH", "data/bounty-candidates.json"))
# Strict keywords limit priority to feasible deliverables for YY Builds.
PREFER = {
    "aggregator": 25, "website": 22, "web app": 22, "github": 18,
    "typescript": 17, "python": 14, "agent": 12, "model": 8, "app": 7,
    "dashboard": 10, "chat": 7
}
# No speculative trading, token launch or viral-marketing competitions.
EXCLUDE = ("launch a real coin", "trade ", "trading", "forecast bitcoin",
           "btc ", "meme coin", "jailbreak", "casino", "gambling",
           "follow accounts", "bring the humans")

def rank(source, now=None):
    now = now or dt.datetime.now(dt.timezone.utc)
    queue = []
    for item in source.get("bounties", []):
        title = item.get("title", "")
        name = title.lower()
        if any(bad in name for bad in EXCLUDE):
            continue
        try:
            end = dt.datetime.fromisoformat(item["deadline"].replace("Z", "+00:00"))
            remaining_h = (end - now).total_seconds() / 3600
            if remaining_h < 12:
                continue
            reward = float(item.get("prize_pool_usdc") or 0)
            count = max(0, int(item.get("submissions") or 0))
            if reward <= 0:
                continue
            score = sum(points for token, points in PREFER.items() if token in name)
            if not score:  # no guessing whether unrelated work suits us
                continue
            if remaining_h >= 48:
                score += 15
            if remaining_h >= 24:
                score += 8
            if count < 50:
                score += 18
            elif count < 300:
                score += 8
            elif count > 1000:
                score -= 12
            if reward >= 500:
                score += 6
            queue.append({
                "title": title, "source_url": item["url"],
                "requirements_url": item["prerequisites_url"],
                "prize_pool_usdc": reward, "deadline": item["deadline"],
                "entries_at_scan": count, "score": score,
                "status": "CANDIDATE_ONLY_NOT_APPLIED",
                "must_verify": [
                    "Exact deliverables and ownership / original code",
                    "Submission and agent transcript requirements",
                    "Eligible country and actual payout network",
                    "Prize availability, competition rules and deadlines"
                ],
            })
        except (ValueError, KeyError, TypeError):
            continue
    queue.sort(key=lambda e: (-e["score"], e["deadline"], e["title"]))
    return {"selected_at_utc": now.isoformat(), "source_checked_at_utc": source.get("checked_at_utc"),
            "not_an_earnings_statement": True, "candidate_count": len(queue),
            "best_candidates": queue[:8]}

def main():
    data = json.loads(SOURCE.read_text(encoding="utf-8"))
    result = rank(data)
    DEST.parent.mkdir(parents=True, exist_ok=True)
    DEST.write_text(json.dumps(result, indent=2, ensure_ascii=False)+"\n", encoding="utf-8")
    print(f"Prioritized {result['candidate_count']} potential bounties (no entries submitted).")

if __name__ == "__main__":
    main()
