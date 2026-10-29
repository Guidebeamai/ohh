# Security

## Known limitation in v0.2

v0.2 describes a harness as a single JSON file served publicly at `/.well-known/hiring-harness.json`. Visibility labels inside that file (`permissioned`, `private`) do not restrict who can read it: anyone who fetches the file sees every section.

The same applies to the consent log. `/.well-known/hiring-consent-log.json` is a public path, so it cannot be "private by default". The example revocation endpoint (`harness://consent/revoke`) is not a resolvable URL.

Until v0.3:

- publish only information you are happy to make public;
- leave rates, detailed availability, private contact details and uncleared endorsements out of a live harness;
- do not publish a consent log.

v0.3 will keep only public sections in the published file and serve everything else from a protected endpoint that checks the requester's authorisation.

## Reporting a vulnerability

Report security problems in the specification, schema or site privately through [GitHub's private vulnerability reporting](https://github.com/Guidebeamai/ohh/security/advisories/new). Please don't open a public issue for them.

We aim to acknowledge reports within five working days.
