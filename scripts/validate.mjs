// Checks that the schema compiles in strict mode, every example harness is
// valid, and every fixture in tests/invalid/ is rejected.
import Ajv2020 from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const readJson = (path) => JSON.parse(readFileSync(join(root, path), 'utf8'));

const ajv = new Ajv2020({ allErrors: true, strict: true });
addFormats(ajv);
const validate = ajv.compile(readJson('schema/open-hiring-harness.v0.2.schema.json'));

let failures = 0;
const fail = (message) => {
  failures += 1;
  console.error(`FAIL ${message}`);
};

for (const file of readdirSync(join(root, 'examples')).filter((f) => f.endsWith('.json'))) {
  const data = readJson(`examples/${file}`);
  if (!file.startsWith('harness.')) {
    console.log(`ok   examples/${file} (parsed; no schema yet)`);
    continue;
  }
  if (validate(data)) console.log(`ok   examples/${file}`);
  else fail(`examples/${file} should be valid:\n${ajv.errorsText(validate.errors, { separator: '\n  ' })}`);
}

for (const file of readdirSync(join(root, 'tests/invalid')).filter((f) => f.endsWith('.json'))) {
  if (validate(readJson(`tests/invalid/${file}`))) fail(`tests/invalid/${file} should be rejected`);
  else console.log(`ok   tests/invalid/${file} rejected`);
}

if (failures > 0) {
  console.error(`\n${failures} check(s) failed`);
  process.exit(1);
}
console.log('\nAll checks passed');
