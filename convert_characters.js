const fs = require("fs");
const path = require("path");

const srcDir = "CharacterUniverse HTML/data/characters";
const destDir = "CharacterUniverseReact/src/data/characters";

const files = fs.readdirSync(srcDir).filter(f => f.endsWith(".js") && f !== "index.js");

for (const file of files) {
  let content = fs.readFileSync(path.join(srcDir, file), "utf-8");

  content = content.replace(/^const\s+([a-zA-Z0-9_]+)\s*=\s*\[/gm, "export const $1 = [");
  content = content.replace(/^const\s+([a-zA-Z0-9_]+)\s*=\s*\{/gm, "export const $1 = {");

  content = content.replace(/if\s*\(\s*typeof\s+window\s*!==\s*['"]undefined['"]\s*\)\s*\{[\s\S]*?\}/g, "");
  content = content.replace(/if\s*\(\s*typeof\s+module\s*!==\s*['"]undefined['"]\s*\)\s*\{[\s\S]*?\}/g, "");

  fs.writeFileSync(path.join(destDir, file.replace(".js", ".ts")), content);
}
console.log("Converted character files.");
