# Governance

The Open Hiring Harness is an open specification **stewarded by [Guidebeam](https://guidebeam.com)**. Stewardship means Guidebeam maintains the repository, the site at [openhiringharness.org](https://openhiringharness.org) and the release process. It does not mean the specification exists to serve Guidebeam.

## Commitments

- **Implementable by anyone.** Nothing in the specification may require Guidebeam's software, services or accounts.
- **No vendor-specific fields.** Extensions that only one implementer needs belong in that implementer's namespace, not in the core schema.
- **Open licence.** The specification, schema and examples stay under Apache 2.0.
- **Decisions in public.** Changes are discussed in issues and pull requests on this repository.

## Maintainers

- Adnan Lodhi (original author)

## How changes are decided

1. **Minor changes** (fixes, clarifications, new optional fields that break nothing) are merged by a maintainer after review.
2. **Breaking changes** start as a proposal in [`docs/proposals/`](docs/proposals/), opened as a pull request. The proposal stays open for comment for at least 14 days before a maintainer accepts or declines it, with reasons recorded in the pull request.
3. Accepted breaking changes ship in the next minor version while the specification is below 1.0.

This model will be revisited if the number of independent implementers grows.
