# Changelog

All notable changes to the Open Hiring Harness are recorded here. The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## Unreleased

- Draft v0.3 proposal: protected access, claim provenance and profile kinds (`docs/proposals/v0.3-access-and-provenance.md`). Students deferred to v0.3.1.
- The site is rewritten around the v0.3 direction: an interactive example of a harness read by anyone and by an approved recruiter, how access works, provenance, who it's for, a roadmap, light and dark themes, and a mobile layout.
- `llms.txt` is rewritten to separate what v0.2 does from what v0.3 proposes, and no longer describes agent entity types as supported.

## 2026-10-29 — repository clean-up

No change to the harness format: v0.2.0 harnesses that were valid before are still valid.

### Added

- Warning in the README, the site, `llms.txt` and `spec.json` that v0.2 publishes every section, including those marked `permissioned` or `private`.
- `SECURITY.md`, `CONTRIBUTING.md` and `GOVERNANCE.md`.
- `npm test` and a CI workflow: the schema must compile in Ajv strict mode, the example harness must validate, and every file in `tests/invalid/` must be rejected. A second job checks links between repository files.

### Changed

- The project moved to the Guidebeamai GitHub organisation, and the site to [openhiringharness.org](https://openhiringharness.org).
- The schema `$id` is now `https://openhiringharness.org/schema/open-hiring-harness.v0.2.schema.json`, and the schema and examples are served from the site.
- Envelope refinements in the schema declare `type: "object"`, so the schema compiles in strict mode.
- `readme.md` renamed to `README.md`. The agent entities proposal moved to `docs/proposals/agent-entities.md`.
- `llms.txt` now says `entity_type` is proposed for v0.3 rather than listing it as a v0.2 field.

### Removed

- `sample.md`, an unrelated draft article.

## 0.2.0 — 2026-02-08

- First public release: schema, example harness, consent log example, MCP interface draft and agent entities proposal.
