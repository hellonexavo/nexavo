---
name: mobile-responsive-qa
description: Review and improve mobile, tablet, and desktop responsiveness for YY Builds projects. Use for responsive QA, layout fixes, overflow problems, touch targets, text wrapping, sticky elements, forms, cards, navigation, and cross-device usability.
---

# Mobile Responsive QA

## Goal
Ensure every user-facing page works cleanly and intentionally on mobile, tablet, and desktop.

Do not treat mobile as a scaled-down desktop version.
Design and verify each breakpoint deliberately.

## When to use
Use this skill when the task involves:
- responsive layout;
- mobile bugs;
- tablet layout;
- overflow;
- broken grids;
- navigation;
- forms;
- booking flows;
- buttons;
- sticky or fixed elements;
- cards;
- hero sections;
- typography wrapping;
- image cropping;
- viewport-specific behavior.

## Device coverage
At minimum, review:
- small mobile;
- standard mobile;
- tablet;
- desktop;
- wide desktop when relevant.

Prefer fluid layouts that behave well between breakpoints.

Do not optimize only for exact preset widths.

## Core responsive checks

### Horizontal overflow
Check for:
- content wider than viewport;
- oversized images;
- fixed-width cards;
- long unbroken text;
- absolute-positioned elements;
- wide tables;
- transformed elements;
- full-width sections with accidental padding overflow.

There should be no accidental horizontal scrolling.

### Typography
Check:
- heading wrapping;
- body text line length;
- minimum readable size;
- line-height;
- spacing between text blocks;
- text clipping;
- overly large hero typography on mobile.

Avoid manual line breaks unless they are intentional and safe across breakpoints.

### Buttons and controls
Check:
- tap targets are large enough;
- buttons do not overflow;
- button text fits;
- primary CTA remains obvious;
- stacked buttons have adequate spacing;
- disabled/loading states remain usable;
- icon-only controls are understandable.

### Navigation
Check:
- mobile menu behavior;
- menu open/close states;
- focus behavior;
- nav labels;
- sticky headers;
- content not hidden behind fixed navigation;
- safe spacing around browser UI.

### Forms
Check:
- inputs fit within viewport;
- labels remain readable;
- field spacing is comfortable;
- error messages do not break layout;
- keyboards do not make actions unreachable;
- submit buttons remain accessible;
- long values wrap or scroll safely;
- date/time controls are usable on mobile.

### Booking and checkout
Check:
- steps remain understandable;
- totals and summaries remain visible;
- sticky action areas do not cover content;
- confirmation actions are clear;
- card/payment UI does not overflow;
- status information remains readable.

### Cards and grids
Check:
- grid columns collapse logically;
- card spacing remains consistent;
- card content does not become cramped;
- uneven content heights do not create visual problems;
- important information is not hidden on smaller screens.

### Images and media
Check:
- correct aspect ratio;
- no unintended stretching;
- important content is not cropped;
- media does not overflow;
- large assets are not unnecessarily loaded.

### Fixed and sticky UI
Be careful with:
- sticky headers;
- floating buttons;
- bottom bars;
- cookie banners;
- modals;
- chat widgets;
- booking controls.

Ensure they do not:
- cover important content;
- block buttons;
- overlap mobile browser chrome;
- trap the user.

### Modals and overlays
Check:
- modal fits viewport height;
- content can scroll;
- close control remains accessible;
- background scroll behavior is correct;
- keyboard focus is handled where appropriate.

## CSS approach
Prefer:
- flexbox;
- grid;
- min/max constraints;
- relative units;
- `clamp()` where appropriate;
- natural wrapping;
- content-driven sizing.

Avoid excessive breakpoint-specific hacks.

Do not use fixed heights unless the design genuinely requires them.

## Safe areas
For mobile UI near screen edges, consider safe-area insets where relevant.

Especially review:
- bottom action bars;
- full-screen panels;
- fixed navigation;
- edge-aligned controls.

## Interaction
Check both pointer and touch usage.

Do not rely only on hover for important information or controls.

Hover effects should not be required to understand how to use the interface.

## Accessibility
Responsive behavior must preserve:
- visible focus states;
- keyboard navigation;
- readable contrast;
- logical reading order;
- semantic structure;
- usable zoom.

Do not disable user zoom.

## Performance
Avoid responsive solutions that:
- render duplicate heavy UI unnecessarily;
- load large assets only to hide them on mobile;
- cause excessive layout shifts;
- add large JavaScript dependencies for simple layout behavior.

## Verification workflow
For each meaningful UI change:

1. inspect the implementation;
2. identify responsive risk areas;
3. review mobile;
4. review tablet;
5. review desktop;
6. check intermediate widths where layout transitions occur;
7. fix overflow and wrapping;
8. review interaction states;
9. run relevant project checks.

## Regression checklist
Before finishing, verify:
- no horizontal scroll;
- navigation works;
- CTA remains visible;
- text does not clip;
- forms remain usable;
- buttons remain tappable;
- fixed elements do not cover content;
- images remain correct;
- desktop behavior was not broken while fixing mobile.

## Completion standard
A responsive task is complete only when:
- the page behaves intentionally across device sizes;
- no obvious overflow remains;
- important actions are accessible;
- mobile is not treated as secondary;
- changes were actually reviewed, not assumed;
- any unverified device behavior is clearly stated.