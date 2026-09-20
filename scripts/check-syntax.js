const fs = require('fs');
const c = fs.readFileSync('scripts/generate-syllabus-gemini.js', 'utf8');

// Check for unclosed template literals
let backtickCount = 0;
const lines = c.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const ch = line[j];
    const prev = j > 0 ? line[j-1] : '';
    if (ch === '\`' && prev !== '\\') {
      backtickCount++;
      if (backtickCount % 2 === 1) {
        console.log('Template literal opened at line ' + (i+1));
      } else {
        console.log('Template literal closed at line ' + (i+1));
      }
    }
  }
}
if (backtickCount % 2 !== 0) {
  console.log('ERROR: UNCLOSED template literal! Total backticks: ' + backtickCount);
} else {
  console.log('All template literals closed OK. Total: ' + backtickCount);
}

// Simple brace balance (ignoring strings/comments - rough check)
let brace = 0, paren = 0, bracket = 0;
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    const ch = line[j];
    if (ch === '{') brace++;
    if (ch === '}') brace--;
    if (ch === '(') paren++;
    if (ch === ')') paren--;
    if (ch === '[') bracket++;
    if (ch === ']') bracket--;
  }
}
console.log('Brace balance: ' + brace + ' (should be 0)');
console.log('Paren balance: ' + paren + ' (should be 0)');
console.log('Bracket balance: ' + bracket + ' (should be 0)');
console.log('Lines: ' + lines.length);
