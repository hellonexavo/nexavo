# YY Builds — simulated free-model router

Implementation toward https://make.fun/bounty/free-model-aggregator-01 .

This is an **original prototype of the required server**, not a claim of meeting all official competition tests and **not a submitted entry**. It has two HTTP endpoints resembling OpenAI and Anthropic chat/message APIs, a synthetic catalog of ten independent simulated providers, deterministic model ranking, failover on simulated refusals, a catalog/routing report, and tests covering twenty requests.

## Execute

```bash
cd bounty-work/model-router-backend
python -m unittest discover -s . -p 'test_router.py' -v
python router.py
curl -s http://127.0.0.1:8080/v1/chat/completions -H 'Content-Type: application/json' -d '{"messages":[{"role":"user","content":"Hello"}]}'
curl -s http://127.0.0.1:8080/catalog
```

Only Python standard library. Default host binds 127.0.0.1. No paid API or custody of keys.

## Missing for actual eligibility

A strict review of the complete make.fun requirements, their kit/grader and authentic AI agent session transcript (with provider recorded usage where required); verification of API-specific edge cases and the official harness. Entries require signed-in platform account and submission via the approved workflow. No payout or contest result is implied. The model/provider catalog is synthetic and no external inference API calls are performed.
