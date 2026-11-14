import datetime as dt
import sys
import unittest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from triage_bounties import rank

NOW = dt.datetime(2026,11,14,18,0,tzinfo=dt.timezone.utc)
class Tests(unittest.TestCase):
    def item(self,title,end="2026-11-20T00:00:00Z",count=20):
        return {"title":title,"deadline":end,"prize_pool_usdc":500,"submissions":count,
                "url":"https://make.fun/bounty/test","prerequisites_url":"https://make.fun/api/competitions/test/requirements"}
    def test_web_app_preferred(self):
        self.assertEqual(rank({"bounties":[self.item("Build a web app")]},NOW)["candidate_count"],1)
    def test_exclude_trading(self):
        self.assertEqual(rank({"bounties":[self.item("Trade BTC with an agent")]},NOW)["candidate_count"],0)
    def test_deadline(self):
        self.assertEqual(rank({"bounties":[self.item("Build a website","2026-11-14T19:00:00Z")]},NOW)["candidate_count"],0)
    def test_not_earnings(self):
        q=rank({"bounties":[self.item("Build an AI agent")]},NOW)
        self.assertTrue(q["not_an_earnings_statement"])
        self.assertEqual(q["best_candidates"][0]["status"],"REQUIREMENTS_REVIEW_REQUIRED")
    def test_competition(self):
        fast=self.item("Build a website",count=4)
        crowded=self.item("Build a website",count=5000)
        q=rank({"bounties":[crowded,fast]},NOW)
        self.assertEqual(q["best_candidates"][0]["entries_at_scan"],4)
if __name__=="__main__":unittest.main()
