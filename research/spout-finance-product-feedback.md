# Spout Finance Product Feedback — Testnet Review

Prepared by **Yurii / YY Builds**

Status: **working submission draft** — wallet-dependent transaction tests are intentionally separated from the completed no-wallet UX review.

## Executive summary

Spout has a strong, easy-to-understand core proposition: buy tokenized equities, keep the position, and borrow against it at 0% interest. The beta communicates that idea quickly and the visual design feels more like a modern brokerage than a typical DeFi dashboard.

The largest product opportunity is not adding more features. It is reducing uncertainty at the exact moments where a user moves from “I understand the idea” to “I am willing to transact.” The beta needs clearer network state, more explicit testnet guidance, stronger risk explanations near actions, and better continuity between Trade and Borrow.

My highest-priority recommendation is a **pre-transaction confidence layer** that explains, before the user signs anything: the selected asset, settlement currency, network, whether funds are mock/testnet, estimated resulting collateral value, borrow capacity, health factor impact, and the next step after purchase.

## What I tested

### Access and onboarding

- Beta URL tested: `https://beta.spout.finance/`
- Access passcode flow successfully unlocked the testnet.
- Onboarding flow reviewed from initial access through the main product.
- The product clearly states that the environment is testnet and that actions are simulated.
- The tour explains the three main concepts: buying stocks, borrowing against holdings, and the future Earn product.

### Main navigation

Reviewed:

- Trade
- Borrow
- Earn
- Market status
- Wallet connection entry point

### Trade screen

Observed:

- Search and asset list
- Asset rows with price, borrowing cost, mini-chart and position information
- Buy/Sell panel
- Currency selector
- Leverage control
- Wallet connection CTA
- Market open/closed state

### Wallet connection

The product exposes wallet connection as the next step before transactions. I stopped before any real signing flow in the automated test session and moved transaction testing to a dedicated test wallet flow.

## Product strengths

### 1. The value proposition is unusually clear for DeFi

“Buy/hold stock exposure, then borrow without selling” is understandable even to users who are not crypto-native. That is a major advantage.

### 2. The interface does not feel like a typical protocol dashboard

The beta feels closer to a consumer brokerage product than a smart-contract console. That lowers cognitive load and makes the product more approachable.

### 3. Borrowing cost is surfaced beside assets

Showing borrowing cost directly in the asset table creates a useful connection between the Trade and Borrow use cases.

### 4. Testnet framing is visible

The onboarding makes it clear that the environment is testnet. This is important because the UI otherwise looks polished enough to be mistaken for a live-money environment.

## High-priority UX findings

### P0/P1 — Pre-transaction context is too fragmented

Before connecting a wallet, the interface shows the trading action but does not yet consolidate all decision-critical information in one place.

**Recommendation:** add a single review state before signing that includes:

- Network
- Testnet/mainnet state
- Asset being bought/sold
- Payment currency
- Amount
- Expected shares/tokens received
- Estimated collateral value after purchase
- Estimated borrow capacity after purchase
- Health factor impact if the user already has debt
- Fees/slippage
- Clear “mock funds / no real value” label on testnet

This would reduce signing anxiety and make Spout feel safer without adding friction.

### P1 — Trade → Borrow continuity should be stronger

The value proposition is not just trading. The differentiator is what happens after a user owns an asset.

**Recommendation:** after a successful testnet purchase, show a contextual next step:

> “You now hold X in collateral value. You can borrow up to Y while keeping your position.”

Then provide a direct CTA to Borrow with the purchased asset preselected.

### P1 — Risk concepts should appear where decisions happen

Terms such as liquidation, health factor, collateral ratio, and option-driven yield are understandable in documentation but should not depend on the user leaving the product to learn them.

**Recommendation:** use progressive disclosure beside the action:

- one-line explanation
- expandable detail
- link to full docs

This is especially important before opening debt.

### P1 — Market-closed behavior needs more explanation

The market status indicator is visible, but a new user may not know what is still possible while the market is closed.

**Recommendation:** clicking/hovering Market Closed should explain:

- when the market reopens
- whether orders can be queued
- whether borrowing/repayment remains available
- which prices are currently being used

### P2 — Borrowing cost needs an explanation of why it differs by asset

Different assets show different annual borrowing costs. That is useful, but without context users may interpret the differences as arbitrary.

**Recommendation:** add a tooltip explaining which inputs drive the rate/cost for each asset.

### P2 — Earn “coming soon” should collect intent

A placeholder is acceptable in beta, but it is a missed research opportunity.

**Recommendation:** add “Notify me” or “Join Earn beta” and optionally ask one question about what the user wants: stablecoin yield, tranche preference, liquidity, or risk tolerance.

## Product recommendations

### 1. Build a Borrow Preview card

Before opening a loan, show:

- collateral value
- requested loan
- LTV
- health factor
- liquidation threshold
- estimated price drop required to reach danger zone
- repayment amount
- clear statement that interest is 0% but risk is not 0%

The strongest version uses a slider so users can see health factor change before they confirm.

### 2. Add a “What changed?” transaction receipt

After every action, give a state-difference receipt:

- Holdings: before → after
- Debt: before → after
- Borrow capacity: before → after
- Health factor: before → after

This is more useful than a generic success toast.

### 3. Add explicit testnet utilities

For beta testers, expose a small testnet panel showing:

- network
- wallet address
- mock balances
- faucet / reset action if supported
- transaction explorer link
- ability to reset the test portfolio

This reduces tester friction and improves the quality of feedback.

### 4. Add scenario testing to Borrow

Let users preview:

- asset -10%
- asset -20%
- asset -30%

and immediately see the health factor/liquidation impact. This teaches risk better than static documentation.

### 5. Explain the protocol’s advantage in the product, not only in docs

The strongest differentiator should be visible near the action:

> Hold equity exposure. Unlock liquidity. Keep the position.

Then clearly explain where the economic trade-offs and risks sit.

## DeFi / tokenization review

### 0% interest is compelling, but users still need an economic explanation

“0% interest” is powerful marketing, but sophisticated users will immediately ask where the economic return comes from and what risks fund the system.

The product should make the mechanism legible in simple language: borrowers receive liquidity while the broader system monetizes option premium / yield mechanics rather than charging conventional loan interest.

### Covered-call yield needs loss-of-upside framing

Covered calls can generate premium, but they also cap some upside in certain scenarios. The UI should not present yield as a free return. Users should understand the trade-off.

### Health factor must be treated as a first-class product concept

A health factor is not only a protocol metric; it is a user decision tool. It should remain visible throughout the lifecycle of a loan, with proactive warnings before liquidation risk becomes urgent.

### Oracle and market-hours behavior deserves explicit UX treatment

Tokenized equities introduce a mismatch between 24/7 blockchain infrastructure and traditional market hours. The beta already shows market status, which is a good start. The product should go further and explain what pricing/oracle logic applies when the underlying equity market is closed.

## Accessibility / clarity checks

Recommended checks before public launch:

- Do not rely only on red/green to communicate price movement or risk.
- Ensure tooltips are keyboard accessible.
- Ensure the health-factor danger state includes text, not color alone.
- Provide meaningful labels for chart controls and wallet actions.
- Verify the right-side trade panel remains usable at laptop widths and mobile breakpoints.
- Keep financial terms plain-language first, technical detail second.

## Transaction-test matrix

The following is the remaining wallet-dependent QA matrix to complete with the dedicated test wallet:

| Test | Expected result | Status |
| --- | --- | --- |
| Connect Phantom test wallet | Wallet connects without requesting seed/private key | Pending manual wallet approval |
| Buy small testnet position | Mock balance decreases and asset holding increases | Pending |
| Sell partial position | Position decreases and balance updates correctly | Pending |
| Switch settlement currency | Quote and balance context update correctly | Pending |
| Borrow against position | Debt is created and borrow capacity decreases | Pending |
| Health factor display | Updates immediately and consistently | Pending |
| Repay partial debt | Debt decreases and health factor improves | Pending |
| Repay full debt | Debt closes cleanly | Pending |
| Market closed handling | Clear explanation / graceful restriction | Pending |
| Transaction error state | Useful, actionable error copy | Pending |

## Suggested severity rubric for bugs

- **Critical:** funds/state integrity issue or misleading signing behavior
- **High:** transaction cannot be completed or risk is materially unclear
- **Medium:** workflow friction, inconsistent calculation/display, poor recovery
- **Low:** copy, layout, visual polish

## Best single product improvement

If Spout implements only one recommendation from this review, I would choose the **Transaction + Risk Preview**.

A user should never have to mentally combine information from the trade panel, docs, borrow page, market-status indicator and wallet modal to understand what a signature will do.

A single preview screen that says exactly what changes after confirmation would increase trust, reduce support load, and make the 0%-interest borrowing proposition easier to adopt.

## Next test step

Complete the wallet-dependent matrix using a dedicated empty Phantom wallet on the Spout testnet, record exact screenshots/results, then replace every “Pending” row with evidence and add any reproducible bugs before final submission.

---

**YY Builds** — Web, AI & Automation  
https://yybuilds.com
