// One Word From Grandma — make.fun bounty entry.
// A deterministic program that writes exactly one word to /output/entry.txt:
// the single word grandma would text about AI.
//
// The word: APATUH
//   Grandma's typo for "apa tuh?" ("what's that?") — the two words squished
//   into one the way she actually types them, warm and a little baffled,
//   funny with no caption needed, and unmistakably her first reaction to AI.
//   The brief explicitly counts "a typo she would actually make", and this
//   one lands because every grandchild has received exactly this text.
//   Six characters, inside the sealed gate of 1–30 (checked below so a
//   future edit can never silently break validity).
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "APATUH";

// Sealed gate: /output/entry.txt must be UTF-8 text of 1 to 30 characters.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim() === "") {
  throw new Error("word violates the 1-30 character gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
