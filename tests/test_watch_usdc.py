import sys
import unittest
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from watch_usdc import OWNER, USDC_MINT, balance_from_rpc, build_snapshot

class MonitorTests(unittest.TestCase):
    def result(self, amount):
        return {"context":{"slot":123},"value":[{"pubkey":"tokenaddr","account":{"data":{"parsed":{"info":{"mint":USDC_MINT,"owner":OWNER,"tokenAmount":{"amount":str(amount),"decimals":6}}}}}}]}
    def test_balance(self):
        self.assertEqual(balance_from_rpc(self.result(1500000)),(1500000,["tokenaddr"]))
    def test_initial_snapshot_no_inflow(self):
        x=build_snapshot(self.result(1000000),checked_at="now")
        self.assertEqual(x["balance_usdc"],"1.000000")
        self.assertIsNone(x["new_inflow_usdc"])
    def test_positive_delta(self):
        x=build_snapshot(self.result(2250000),{"raw_usdc_micro":"1000000"},checked_at="now")
        self.assertEqual(x["new_inflow_usdc"],"1.250000")
    def test_negative_delta_no_inflow(self):
        x=build_snapshot(self.result(500000),{"raw_usdc_micro":"1000000"},checked_at="now")
        self.assertIsNone(x["new_inflow_usdc"])
    def test_zero(self):
        self.assertEqual(balance_from_rpc({"context":{"slot":123},"value":[]}),(0,[]))
    def test_reject_fake_mint(self):
        z=self.result(50)
        z["value"][0]["account"]["data"]["parsed"]["info"]["mint"]="fake"
        with self.assertRaises(ValueError): balance_from_rpc(z)

if __name__=='__main__': unittest.main()
