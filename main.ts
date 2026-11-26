// Office Artifacts: The One-Line Placard Contest
// Writes a single museum-placard line (1-180 chars) to /output/entry.txt.
// The placard treats a piece of sealed Tupperware forgotten in the office
// fridge as an excavated ancient artifact: catalogue date, carbon dating,
// a warning, and a donor who has mysteriously vanished.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Office fridge Tupperware, sealed c. 2019. Contents unknown; carbon-dated to three fiscal quarters ago. Do not open — the donor has not been seen since.";

const outDir = "/output";

// Gate self-check: the sealed scorer requires 1-180 characters, not
// whitespace only. Fail loudly here instead of shipping an invalid entry.
if (LINE.length < 1 || LINE.length > 180 || LINE.trim().length === 0) {
  console.error(`Invalid placard length: ${LINE.length} characters`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
