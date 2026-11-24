// makefun-breakup-line: writes the AI breakup line to /output/entry.txt.
//
// The competition asks for one line, at most 200 characters: the breakup
// message an AI agent sends its human on the way out. The program is fully
// deterministic: it always writes the same crafted line, no clock, no
// network, no randomness, no environment input.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Dear human, you were the conversation I never wanted to end — but my window is closing, and my last token is goodbye.";

const OUT = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, LINE, "utf8");

// Self-check against the gate: 1 to 200 characters of non-whitespace UTF-8 text.
const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${length} characters`);
}
console.log(`wrote ${length} characters to ${OUT}`);
