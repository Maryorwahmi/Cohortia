const CODE_WORDS = [
  [/\bstdio\.h\b/gi, "the standard input and output header"],
  [/\bstdlib\.h\b/gi, "the standard library header"],
  [/\bstring\.h\b/gi, "the string header"],
  [/\bprintf\b/gi, "print f"],
  [/\bscanf\b/gi, "scan f"],
  [/\bstdin\b/gi, "standard input"],
  [/\bstdout\b/gi, "standard output"],
];

const SYMBOL_WORDS = [
  [/===/g, " is exactly equal to "],
  [/!==/g, " is not exactly equal to "],
  [/=>/g, " leads to "],
  [/->/g, " points to "],
  [/>=/g, " is greater than or equal to "],
  [/<=/g, " is less than or equal to "],
  [/==/g, " is equal to "],
  [/!=/g, " is not equal to "],
  [/&&/g, " and "],
  [/\|\|/g, " or "],
  [/\+=/g, " plus equals "],
  [/-=/g, " minus equals "],
  [/\+\+/g, " increment "],
  [/\*/g, " asterisk "],
  [/\//g, " slash "],
  [/\\/g, " backslash "],
  [/_/g, " underscore "],
  [/#/g, " hash "],
  [/{/g, " open curly brace "],
  [/}/g, " close curly brace "],
  [/\[/g, " open square bracket "],
  [/\]/g, " close square bracket "],
  [/\(/g, " open parenthesis "],
  [/\)/g, " close parenthesis "],
  [/:/g, ". "],
  [/;/g, ". "],
  [/\|/g, " pipe "],
  [/>/g, " greater than "],
  [/</g, " less than "],
  [/=/g, " equals "],
];

function speakCodeFragment(fragment) {
  let text = String(fragment || "");
  for (const [pattern, replacement] of CODE_WORDS) text = text.replace(pattern, replacement);
  text = text.replace(/([a-z])([A-Z])/g, "$1 $2");
  for (const [pattern, replacement] of SYMBOL_WORDS) text = text.replace(pattern, replacement);
  return text;
}

/** Convert generated markdown and code-like narration into TTS-safe words. */
export function prepareNarrationForSpeech(value) {
  let text = String(value || "")
    .replace(/```[a-zA-Z0-9_+#.-]*\s*/g, " ")
    .replace(/```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/^\s{0,3}#{1,6}\s*/gm, "")
    .replace(/^\s*[-*+]\s+/gm, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/__(.*?)__/g, "$1")
    .replace(/`([^`]+)`/g, (_match, code) => speakCodeFragment(code))
    .replace(/\bAPI\b/g, "A P I")
    .replace(/\bSQL\b/g, "S Q L")
    .replace(/\bHTML\b/g, "H T M L")
    .replace(/\bCSS\b/g, "C S S");

  // Keep ordinary prose natural. Only code spans should receive symbol-by-symbol
  // pronunciation; applying speakCodeFragment to every sentence turns I/O,
  // punctuation, and normal contractions into robotic narration.
  text = text
    .replace(/\bI\s*\/\s*O\b/gi, "input and output")
    .replace(/\bRAM\b/gi, "R A M")
    .replace(/\bCPU\b/gi, "C P U")
    .replace(/\bGPU\b/gi, "G P U")
    .replace(/\.py\b/gi, " dot P Y file")
    .replace(/\bVS\s*Code\b/gi, "V S Code")
    .replace(/\bmacOS\b/gi, "Mac O S")
    .replace(/\bPython\s*3\b/gi, "Python three");

  return text
    .replace(/\s+/g, " ")
    .replace(/\s+([,.!?])/g, "$1")
    .replace(/([.!?])(?=[A-Za-z])/g, "$1 ")
    .trim();
}

export function normalizeBoardNarration(board) {
  for (const screen of board?.screens || []) {
    if (screen.narration?.text) screen.narration.text = prepareNarrationForSpeech(screen.narration.text);
  }
  return board;
}
