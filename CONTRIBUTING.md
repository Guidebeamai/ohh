# Contributing

Thanks for helping shape the Open Hiring Harness.

## Before you write anything

Open an issue first. Describe:

- the problem you're solving, with a real use case if you have one;
- the trade-offs;
- how it fits the design principles in the [README](README.md#design-principles).

Larger changes, and anything that breaks existing harnesses, start as a proposal in [`docs/proposals/`](docs/proposals/). See [GOVERNANCE.md](GOVERNANCE.md) for how proposals are decided.

## Changing the schema

- Keep the schema valid under Ajv strict mode.
- Update `examples/` so they show the change.
- Add a file to `tests/invalid/` for each new rule, containing a harness the rule must reject.
- Run the checks:

  ```bash
  npm install
  npm test
  ```

- Add an entry to [CHANGELOG.md](CHANGELOG.md).

## Licence

Contributions are accepted under the [Apache License 2.0](LICENSE).
