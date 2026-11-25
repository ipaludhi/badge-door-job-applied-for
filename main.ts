// Make the AI Judge Laugh (alfasurya91) — entry program (Node 22, stdlib only).
// Writes one original one-line joke about office life to /output/entry.txt.
// The joke: a badge opens every door except the one to the job you actually
// applied for — access everywhere, advancement nowhere.
// Revision gate (turn 1): the joke text is frozen — this edit only adds a
// self-check that the written file round-trips byte-identical, so the
// entrypoint is revised in-session without changing the entry itself.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE =
  'My badge opens every door in the building except the one to the job I actually applied for.';

// Writes exactly the joke, no trailing newline: the gate counts characters
// (1-200), so the file is 91 characters / 91 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke must be 1-200 characters, got ${JOKE.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), JOKE, 'utf8');
if (readFileSync(join(outDir, 'entry.txt'), 'utf8') !== JOKE) {
  throw new Error('entry round-trip mismatch');
}
