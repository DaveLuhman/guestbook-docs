# Documentation Agents & Responsibilities

This document defines the roles, expectations, and boundaries for humans and automated agents contributing to the Guestbook documentation site.

Its purpose is to preserve clarity, consistency, and intent as the documentation grows.

This file is normative.

---

## Core Principle

The documentation site is part of the product.

Clarity beats completeness.
Structure beats cleverness.
Design beats accretion.

Any contribution that violates these principles should be revised or rejected.

---

## Audience Model (Hard Boundary)

All documentation content MUST belong to exactly one of the following audiences:

- Users
- Administrators
- Developers & Integrators

If a page cannot be clearly assigned to one audience, it does not belong in the site yet.

Cross-audience references are allowed, but implicit cross-audience assumptions are not.

---

## Human Contributors

### Responsibilities
- Place new content in the correct audience silo.
- Ensure each page clearly states who it is for.
- Maintain consistent page anatomy and tone.
- Avoid introducing mixed-audience explanations.
- Prefer explicit links over duplicated explanations.

### Constraints
- Do not reorganize navigation casually.
- Do not add top-level sections without reviewing the design model.
- Do not introduce “miscellaneous” or “catch-all” pages.

---

## AI / Automation Agents

Automation agents (including scaffolding tools, LLMs, and static generators) are allowed to:

- Scaffold page structure within an existing audience silo.
- Expand outlines into draft content.
- Normalize formatting and headings.
- Generate navigation trees that follow the silo model.

Automation agents must NOT:

- Invent new audiences or collapse existing ones.
- Move content across audience boundaries without explicit instruction.
- Generate pages that rely on unstated knowledge from another silo.
- Optimize for cleverness or novelty over clarity.

When uncertain, agents should prefer omission over invention.

---

## Page Anatomy Contract

Every page must include:
1. A clear page title
2. A short contextual summary explaining why the page exists
3. Scoped sections appropriate to the audience
4. Minimal nesting depth
5. No assumed cross-audience knowledge

Automation agents should treat this structure as mandatory.

---

## Navigation Rules

- Audience sections are the primary navigation axis.
- Only one audience section should be expanded at a time.
- Audience landing pages are mandatory and may not be removed.
- New pages must fit naturally into the existing hierarchy or trigger review.

Agents should not “flatten” or auto-generate navigation based solely on file structure.

---

## Review Triggers

The following conditions require human review:

- A page references multiple audiences without explicit labeling.
- A page introduces new terminology without context.
- A page feels applicable “to everyone.”
- A page exists primarily to link elsewhere without adding clarity.

---
## Documentation Images Checklist

This project uses images intentionally. Visuals must reduce cognitive load, clarify workflows, or establish physical context. Decorative or redundant images are discouraged.

### Approved Storage Locations

All publishable images **must** live under `public/docs/`.

Use the following structure:

public/docs/
- shared/
  - ui/
  - icons/
  - screenshots/
  - diagrams/
- users/
  - kiosks/
  - flows/
  - screenshots/
- admin/
  - kiosks/
  - flows/
  - diagrams/
  - screenshots/
- developers/
  - diagrams/
  - flows/
  - screenshots/

Do not store images alongside MDX files.
Do not introduce ad-hoc `assets/` directories.

### File Types & Formats

- Photos: `.webp` preferred
- Diagrams / flowcharts / architecture: `.svg` preferred
- Screenshots: `.webp` or `.png` if necessary
- Icons: `.svg` where possible

Avoid JPEG unless there is a strong reason.

### Naming Conventions

Use descriptive, kebab-case filenames:

- kiosk-front-hero.webp
- flow-sign-in-happy-path.svg
- diagram-deployment-kiosk-vs-workstation.svg
- screenshot-admin-device-binding.webp

Avoid generic names like image1.png, diagram-final.svg, or new-logo.png.

### Linking Images in MDX

Use **absolute paths from the site root**.

Preferred (Markdown image syntax):
```md
![Guestbook kiosk on a front desk](/docs/users/kiosks/kiosk-front-hero.webp)
```
When captions or layout control are needed, use HTML:
```html
<figure>
  <img src="/docs/admin/diagrams/diagram-deployment-kiosk-vs-workstation.svg"
       alt="Deployment models: dedicated kiosk vs shared workstation" />
  <figcaption>
    Dedicated kiosks are simpler to support; shared workstations introduce environmental drift.
  </figcaption>
</figure>
```
Do not use relative paths.
Do not import images directly into MDX.

### Accessibility Requirements

Every image must include meaningful alternative text.

- Describe what the image communicates, not just what it shows
- Avoid phrases like “image of” or “screenshot of”
- Decorative images should be avoided entirely

### When Images Are Required

Use images intentionally in these cases:

Users:
- Establishing what a kiosk looks like
- Demonstrating sign-in or confirmation flow
- Showing where to scan an ID or position a card

Administrators:
- Deployment models and topology
- Provisioning or reset workflows
- Troubleshooting decision trees

Developers & Integrators:
- Architecture and trust boundaries
- Sequence diagrams (kiosk ↔ sidecar ↔ backend)
- Security and identity models

If an image does not make the explanation faster or clearer, omit it.

### Source Files & Editing

- Keep editable diagram sources (Figma, draw.io, etc.) out of `public/`
- Store sources under `meta-docs/assets/` or a design system repository
- Export only final, optimized assets into `public/docs/`

### Performance Guidelines

- Target max width: ~1600–2000px for photos
- Compress images appropriately (quality ~75–85 for WEBP)
- SVGs should be optimized (no embedded raster blobs)

Documentation should load quickly even on kiosk-class hardware.

### Non-Goals

- No stock photography for decoration
- No copyrighted logos or branding in documentation imagery
- No screenshots containing real user data
- No UI mockups that don’t match actual behavior

Clarity and accuracy take priority over aesthetics.

## Longevity Clause

This document exists to outlive the first version of the site.

When in doubt, preserve intent over convenience.
