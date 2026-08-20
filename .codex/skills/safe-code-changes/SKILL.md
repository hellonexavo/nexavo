---
name: safe-code-changes
description: Make safe, minimal, reviewable code changes in YY Builds projects. Use for bug fixes, refactors, feature changes, integration updates, dependency changes, and any task where regressions or unintended side effects must be avoided.
---

# Safe Code Changes

## Goal
Make the smallest correct change that fully solves the task while preserving existing working behavior.

Do not optimize for speed alone.
Optimize for correctness, safety, reviewability, and low regression risk.

## When to use
Use this skill when the task involves:
- fixing bugs;
- changing existing functionality;
- refactoring code;
- changing data flow;
- changing booking logic;
- changing forms;
- changing payment or checkout logic;
- changing API integrations;
- changing authentication;
- changing dependencies;
- modifying shared components;
- modifying production behavior.

## Before changing code
Inspect the relevant files first.

Understand:
- current behavior;
- dependencies;
- data flow;
- shared components;
- external integrations;
- assumptions already present in the code;
- nearby code that may be affected.

Do not make a change based only on filenames or guesses.

## Change scope
Prefer the smallest safe change that solves the problem.

Avoid:
- unrelated refactors;
- large rewrites;
- renaming unrelated files;
- reformatting large areas unnecessarily;
- replacing working architecture without a clear reason;
- changing public behavior outside the requested scope.

If a broader refactor is genuinely required, explain why before doing it.

## Preserve user work
Assume there may be uncommitted work.

Do not:
- discard unrelated changes;
- reset files;
- restore files to HEAD;
- overwrite unrelated work;
- delete branches;
- rewrite Git history;
- force push.

Never use destructive Git operations unless explicitly requested.

## Sensitive areas
Treat these as high risk:
- authentication;
- payment logic;
- checkout;
- booking confirmations;
- customer data;
- API routes;
- secrets;
- environment variables;
- database writes;
- external webhooks.

For sensitive changes:
1. inspect before editing;
2. minimize scope;
3. validate assumptions;
4. verify failure paths;
5. verify success paths;
6. review the final diff carefully.

## Secrets
Never expose or hard-code:
- API keys;
- access tokens;
- passwords;
- private keys;
- secret URLs;
- environment credentials.

Do not print secrets into logs.

Do not move secrets into client-side code.

## Dependencies
Before adding a new dependency:
- check whether the existing stack can solve the task;
- check whether the dependency is actually needed;
- avoid adding a package for trivial functionality.

If a dependency is added, understand its purpose and impact.

Avoid unnecessary dependency upgrades during unrelated tasks.

## Error handling
Do not hide errors merely to make the build pass.

Prefer:
- clear failure states;
- useful error messages;
- predictable fallback behavior;
- safe defaults.

Do not silently convert real failures into fake success states.

## Forms and external actions
For forms, booking, checkout, and external actions:
- validate input;
- handle loading;
- handle failure;
- handle success;
- prevent accidental duplicate actions where appropriate.

Never report success unless the underlying operation succeeded.

## Type safety
Preserve or improve type safety.

Avoid:
- unnecessary `any`;
- unsafe casts;
- suppressing TypeScript errors without justification;
- `@ts-ignore` as a quick fix.

Fix the actual issue where practical.

## Testing and verification
After meaningful changes, run the relevant available checks.

Prefer:
1. targeted tests if available;
2. lint;
3. type checking;
4. production build;
5. relevant manual verification.

If something cannot be run, say so explicitly.

Never claim that something passed unless it was actually executed successfully.

## Regression review
Before finishing, check whether the change could affect:
- navigation;
- forms;
- booking;
- checkout;
- API behavior;
- client/server boundaries;
- shared components;
- responsive layout;
- SEO metadata;
- external links;
- existing integrations.

## Diff review
Before declaring the task complete:
- review the final diff;
- confirm only intended files changed;
- confirm no secrets were added;
- confirm no unrelated code was modified;
- confirm the change is understandable and maintainable.

## Completion standard
A safe code task is complete only when:
- the requested behavior is implemented;
- unrelated behavior is preserved;
- relevant checks have been run;
- regressions have been considered;
- the diff is clean;
- any remaining uncertainty is clearly stated.