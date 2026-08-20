---
name: seo-performance
description: Review and improve technical SEO, metadata, indexing, structured discoverability, performance, Core Web Vitals, assets, rendering, and loading behavior for YY Builds projects. Use for public pages, landing pages, portfolio pages, SEO audits, metadata changes, sitemap or robots work, image optimization, performance audits, and production-readiness reviews.
---

# SEO & Performance

## Goal

Improve discoverability and loading performance without damaging UX, accessibility, maintainability, or existing functionality.

Optimize for real users first.

Do not use SEO tricks, keyword stuffing, fake content, or unnecessary technical complexity.

## When to use

Use this skill when working on:

- public pages;
- landing pages;
- portfolio pages;
- service pages;
- metadata;
- titles and descriptions;
- Open Graph;
- social sharing;
- canonical URLs;
- sitemap;
- robots directives;
- indexing;
- structured data;
- internal linking;
- images;
- fonts;
- JavaScript payload;
- rendering strategy;
- loading performance;
- Core Web Vitals;
- production SEO or performance audits.

## Inspect first

Before changing SEO or performance behavior, inspect:

- current Next.js structure;
- existing metadata;
- root and nested layouts;
- page-specific metadata;
- sitemap implementation;
- robots configuration;
- canonical behavior;
- image usage;
- font loading;
- client/server component boundaries;
- third-party scripts;
- analytics;
- current dependencies.

Do not create duplicate systems when the project already has a working implementation.

## Search intent

Every indexable page should have a clear purpose.

Ask:

1. What is this page about?
2. Who is it for?
3. What should the visitor understand?
4. What should the visitor do next?

Do not create low-value pages solely to target keywords.

## Titles

Page titles should be:

- accurate;
- specific;
- readable;
- useful to humans;
- appropriately differentiated between pages.

Avoid:

- keyword stuffing;
- repeating the same title everywhere;
- misleading titles;
- unnecessarily long titles.

## Meta descriptions

Descriptions should accurately summarize the page and encourage the appropriate visitor to continue.

Avoid duplicate generic descriptions across unrelated pages.

Do not promise services, features, locations, pricing, or results that the page does not actually support.

## Headings

Maintain semantic hierarchy.

Prefer:

- one clear primary page heading where appropriate;
- logical section headings;
- headings that describe the content beneath them.

Do not use heading tags only for visual styling.

Do not fill headings with repetitive keywords.

## Canonical URLs

Use canonical URLs intentionally.

Before adding or changing canonical behavior, understand:

- production domain;
- duplicate routes;
- alternate URLs;
- query parameters;
- preview/staging environments.

Do not blindly canonicalize unrelated pages to the homepage.

## Indexing

Be deliberate about what search engines should index.

Review:

- production pages;
- demo pages;
- test routes;
- duplicate content;
- private/admin routes;
- temporary pages;
- staging behavior.

Do not accidentally block the entire production site.

Do not accidentally expose private or test content to indexing.

## Robots

When modifying robots behavior:

- preserve intentional existing rules;
- verify production implications;
- avoid broad disallow rules without justification.

Remember that robots directives are not an access-control mechanism.

Private information must be protected by actual authorization, not `robots.txt`.

## Sitemap

Public canonical pages that should be discoverable should be represented appropriately.

Avoid:

- broken URLs;
- private routes;
- noncanonical duplicates;
- irrelevant parameterized URLs.

When routes change, consider sitemap implications.

## Open Graph and social sharing

For important public pages, consider:

- title;
- description;
- canonical URL;
- preview image;
- image dimensions;
- meaningful alternative text where relevant.

Do not use misleading preview content.

## Structured data

Use structured data only when:

- it accurately represents visible page content;
- the schema type genuinely applies;
- the underlying information is real.

Never fabricate:

- reviews;
- ratings;
- prices;
- availability;
- business information;
- events;
- authorship.

Validate structured data when introducing or changing it.

## Internal linking

Use descriptive, useful internal links.

Important pages should not be unnecessarily isolated.

Avoid excessive repetitive links created solely for SEO.

## Images

For meaningful images:

- use appropriate dimensions;
- avoid oversized source assets;
- preserve aspect ratio;
- prevent layout shift;
- use modern optimization capabilities where appropriate;
- provide useful alt text when the image conveys information.

Decorative images should not receive misleading descriptive alt text.

## Next.js images

Prefer the project's existing optimized image approach.

When using Next.js image optimization, configure dimensions or responsive sizing appropriately.

Do not replace a working image strategy without a measurable reason.

## Fonts

Avoid loading unnecessary font families, weights, or styles.

Prefer efficient font loading.

Review whether fonts contribute to:

- render delay;
- layout shift;
- excessive network requests.

Do not sacrifice brand consistency merely to reduce a tiny amount of data.

## JavaScript

Minimize unnecessary client-side JavaScript.

Before adding `"use client"`, verify that client-side behavior is actually required.

Prefer server rendering/components where appropriate to the existing architecture.

Avoid shipping large libraries for trivial functionality.

## Third-party scripts

Treat third-party scripts as a performance and privacy cost.

Before adding one, understand:

- why it is required;
- when it loads;
- how large it is;
- whether it blocks rendering;
- what data it collects.

Do not remove required analytics or integrations without understanding their purpose.

## Core Web Vitals

Consider:

- Largest Contentful Paint (LCP);
- Interaction to Next Paint (INP);
- Cumulative Layout Shift (CLS).

Look for likely causes such as:

- oversized hero media;
- render-blocking resources;
- excessive client JavaScript;
- unstable dimensions;
- expensive interactions;
- late-loading UI;
- third-party scripts.

Do not claim a Core Web Vitals score unless it was actually measured.

## Loading behavior

Prefer useful content appearing quickly.

Avoid:

- unnecessary splash screens;
- long entrance animations;
- blocking the page for decorative effects;
- loading large resources before they are needed.

Use lazy loading appropriately, but do not lazily load critical above-the-fold content without reason.

## Caching

Use caching intentionally according to the data's behavior.

Do not cache:

- user-specific sensitive data publicly;
- dynamic information longer than correctness allows.

Do not disable caching globally merely to fix one stale-data problem.

## Performance optimization

Prioritize meaningful bottlenecks.

Do not perform complicated micro-optimizations without evidence that they matter.

Prefer improvements that reduce:

- network payload;
- unnecessary rendering;
- unnecessary JavaScript;
- duplicate requests;
- oversized media;
- layout shifts.

## Accessibility and SEO

Do not harm accessibility for SEO.

Semantic HTML, meaningful links, headings, labels, and accessible images generally support both users and discoverability.

Never hide keyword-filled text from users.

## Content integrity

Never invent:

- testimonials;
- customer counts;
- awards;
- business locations;
- case-study results;
- statistics;
- ratings;
- partnerships.

If content is placeholder/demo content, preserve that distinction.

## Verification

After meaningful SEO/performance changes:

1. inspect the final diff;
2. run lint if available;
3. run type checking if available;
4. run the production build when appropriate;
5. verify important routes still render;
6. review metadata output where relevant;
7. verify canonical behavior where relevant;
8. verify sitemap/robots behavior when changed;
9. review mobile behavior;
10. check for obvious asset or layout regressions.

Use measurement tools when available for performance claims.

Never claim something was measured when it was only inferred.

## Regression review

Before finishing, check that the change did not break:

- navigation;
- metadata inheritance;
- canonical URLs;
- sitemap;
- robots behavior;
- images;
- fonts;
- analytics;
- external integrations;
- mobile layout;
- accessibility;
- production build.

## Completion standard

The task is complete only when:

- SEO changes accurately describe real content;
- indexing behavior is intentional;
- no fake structured data or claims were introduced;
- performance changes preserve functionality;
- relevant checks were actually performed;
- measured and inferred performance findings are clearly distinguished;
- anything that could not be verified is explicitly stated.