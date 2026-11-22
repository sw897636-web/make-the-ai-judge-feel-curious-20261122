import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Entry text, revision 3 (final): tightened the rhythm — dropped a comma,
// and let the last sentence stand alone so the final image lands on its
// own: the ink isn't his.
const ENTRY =
  "On the lighthouse door, a note in pencil: 'Gone to count the stars that went out.' The light still turns on time, every night. No one has seen the keeper since. The logbook's last page is blank — except for one word, underlined twice. The ink isn't his.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
