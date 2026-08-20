---
name: pre-deploy-audit
description: Perform a final production-readiness audit for YY Builds before deployment. Use before release, production deploy, major merge, or any task where code quality, security, responsive behavior, forms, SEO, integrations, Git diff, and regression risk must be reviewed together.
---

# Pre-Deploy Audit

## Goal

Before production deployment, verify that the change is actually ready.

Do not treat a successful build as sufficient proof of production readiness.

The audit should combine:

- code safety;
- functional correctness;
- responsive QA;
- security review;
- forms and booking integrity;
- SEO review;
- performance review;
- Git/diff review;
- regression review.

## When to use

Use this skill:

- before production deployment;
- before merging a substantial feature;
- after major UI changes;
- after booking or form changes;
- after payment-related changes;
- after API or integration changes;
- after dependency changes;
- after routing or SEO changes;
- whenever the user asks whether the site is ready to publish.

## Step 1 — Understand the change

Before auditing, identify:

- what changed;
- why it changed;
- which routes are affected;
- which shared components are affected;
- whether external integrations are involved;
- whether customer data is involved;
- whether booking/payment behavior is involved.

Do not audit only the files that appear obvious from the task description.

## Step 2 — Git review

Inspect the repository state.

Review:

- current branch;
- modified files;
- untracked files;
- staged changes;
- final diff.

Check that:

- only intended files changed;
- unrelated user work was not overwritten;
- no secrets were added;
- no customer data was added;
- no debug files were accidentally introduced;
- no temporary assets or test artifacts remain.

Do not perform destructive Git operations automatically.

## Step 3 — Code quality

Review changed code for:

- correctness;
- maintainability;
- clear naming;
- unnecessary complexity;
- duplicate logic;
- unsafe casts;
- unnecessary `any`;
- dead code;
- temporary comments;
- debug logging;
- commented-out production code.

Prefer understandable code over clever code.

## Step 4 — Security

Review for:

- exposed secrets;
- client-side private credentials;
- unsafe environment variables;
- unvalidated input;
- trust of client-controlled data;
- unsafe external URLs;
- dangerous HTML rendering;
- sensitive information in logs;
- privileged operations performed without proper checks.

Treat authentication, payment, API, booking, and customer-data code as high risk.

## Step 5 — Forms and booking

If forms or booking are affected, verify:

- required fields;
- validation;
- loading state;
- success state;
- failure state;
- duplicate submission behavior;
- mobile usability;
- server-side validation where required;
- spam/abuse protections where appropriate.

Confirm that the UI does not report success unless the real operation succeeded.

For booking, distinguish clearly between:

- request sent;
- booking requested;
- booking confirmed.

Never invent confirmation.

## Step 6 — Payments

If payment-related functionality is affected, verify:

- raw card details are not handled directly;
- secret payment credentials remain server-side;
- pricing is not trusted solely from the client;
- payment success is verified appropriately;
- browser redirects are not treated as proof of payment;
- webhook authenticity is verified where required;
- duplicate events are handled safely.

If payment behavior cannot be fully verified, explicitly state that.

## Step 7 — Responsive QA

Review affected pages at minimum for:

- small mobile;
- standard mobile;
- tablet;
- desktop.

Check:

- horizontal overflow;
- heading wrapping;
- button sizing;
- navigation;
- forms;
- cards;
- grids;
- images;
- fixed/sticky UI;
- modals;
- CTA visibility.

Fixing desktop must not break mobile, and vice versa.

## Step 8 — Accessibility

Review affected user-facing UI for:

- semantic HTML;
- meaningful labels;
- keyboard usability;
- visible focus states;
- readable contrast;
- image alt text where appropriate;
- logical heading order;
- adequate touch targets.

Do not sacrifice accessibility for visual polish.

## Step 9 — SEO

For affected public routes, review:

- title;
- meta description;
- heading structure;
- canonical behavior where relevant;
- indexing implications;
- sitemap implications;
- robots implications;
- social preview metadata where relevant;
- structured data if present.

Do not add fake reviews, ratings, locations, statistics, or business claims.

## Step 10 — Performance

Review for obvious performance regressions:

- excessive client JavaScript;
- unnecessary dependencies;
- oversized images;
- large media;
- duplicate requests;
- expensive visual effects;
- layout shift;
- unnecessary third-party scripts;
- unnecessary client components.

Do not make unsupported performance claims without measurement.

## Step 11 — Dependencies

If dependencies changed:

- understand why each dependency was added or upgraded;
- confirm it is actually needed;
- review package-lock changes;
- avoid unrelated upgrades;
- check for obvious compatibility issues.

Do not introduce a dependency solely to solve trivial functionality that the existing stack already supports.

## Step 12 — Routes and navigation

Verify important affected routes.

Check:

- navigation links;
- portfolio links;
- booking links;
- CTA destinations;
- external links;
- redirects;
- not-found behavior where relevant.

No important route should silently break.

## Step 13 — External integrations

If the change touches:

- email;
- booking provider;
- analytics;
- API;
- database;
- payment provider;
- webhook;
- third-party service;

verify the integration behavior as far as the available environment allows.

Do not invent undocumented responses or claim production verification without evidence.

## Step 14 — Automated checks

Run the relevant available checks.

Prefer, where applicable:

1. targeted tests;
2. lint;
3. TypeScript/type checking;
4. production build;
5. project-specific validation commands.

If a command fails:

- investigate it;
- determine whether the change caused it;
- fix relevant failures;
- do not hide errors.

Never claim a command passed unless it actually completed successfully.

## Step 15 — Manual verification

Where practical, verify the affected behavior manually.

Examples:

- open affected routes;
- submit forms;
- verify error states;
- verify loading states;
- test responsive layout;
- test navigation;
- test booking flow;
- check important links.

If manual verification is impossible, state exactly what remains unverified.

## Step 16 — Final diff review

Before declaring readiness:

- inspect the final diff again;
- confirm intended scope;
- confirm no accidental deletions;
- confirm no secrets;
- confirm no debug output;
- confirm no temporary code;
- confirm no unrelated changes.

## Release decision

Conclude with one of these outcomes:

### READY
Use only when:

- relevant checks passed;
- no blocking issues remain;
- critical behavior was verified as far as the environment allows.

### READY WITH NOTES
Use when:

- no known blocking issue remains;
- some noncritical verification could not be completed;
- remaining uncertainty is explicitly documented.

### NOT READY
Use when:

- build or critical checks fail;
- security issues remain;
- core functionality is broken;
- forms falsely report success;
- payment behavior is unsafe;
- major responsive regressions remain;
- production behavior cannot be trusted.

Do not approve deployment merely because the user wants to publish quickly.

## Final report format

Summarize:

1. what was reviewed;
2. what checks were actually run;
3. what passed;
4. what failed;
5. what was fixed;
6. what remains unverified;
7. final release decision.

Never blur the difference between:

- inspected;
- inferred;
- tested;
- verified.