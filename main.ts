// One-line AI excuse for breaking production.
// Writes the entry line to /output/entry.txt (or MAKEFUN_OUTPUT_DIR).
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The deploy was green on my machine. Production is simply running a different reality.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Gate guard: the entry must be one line of 1-180 characters.
if (LINE.length < 1 || LINE.length > 180 || LINE.includes("\n")) {
  throw new Error("entry line violates the 1-180 character single-line gate");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
