import json
import pathlib
import sys
import tempfile
import unittest
from html.parser import HTMLParser
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1] / "scripts"))
from build_candidate import choose, render, build

class Collector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.cards = 0
        self.links = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "article" and attrs.get("class") == "model":
            self.cards += 1
        if tag == "a":
            self.links.append(attrs.get("href"))

class Tests(unittest.TestCase):
    def test_unknown_task_is_not_faked(self):
        self.assertIsNone(choose({"best_candidates":[{"title":"Trade cryptocurrencies","status":"CANDIDATE_ONLY_NOT_APPLIED"}]}))
    def test_functioning_directory_markup(self):
        p=Collector()
        p.feed(render())
        self.assertEqual(p.cards, 6)
        self.assertTrue(all(url.startswith("https://") for url in p.links))
    def test_does_not_request_wallet_or_secret(self):
        html=render().lower()
        self.assertNotIn('type="password"',html)
        self.assertNotIn('fetch(',html)
    def test_build_contains_submission_caveat(self):
        with tempfile.TemporaryDirectory() as d:
            root=pathlib.Path(d)
            (root/"data").mkdir()
            (root/"data/bounty-candidates.json").write_text(json.dumps({"best_candidates":[{"title":"The best free AI model aggregator","status":"CANDIDATE_ONLY_NOT_APPLIED","source_url":"https://make.fun/bounty/free-model-aggregator-01"}]}))
            p=build(root)
            self.assertTrue((p/"index.html").exists())
            self.assertIn("NOT SUBMITTED",(p/"README.md").read_text())
if __name__ == "__main__":
    unittest.main()
