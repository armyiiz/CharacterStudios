const fs = require("fs");
const path = require("path");

const destDir = "CharacterUniverseReact/src/data/characters";
const files = fs.readdirSync(destDir).filter(f => f.endsWith(".ts") && f !== "index.ts");

for (const file of files) {
  let content = fs.readFileSync(path.join(destDir, file), "utf-8");

  content = content.replace(/if\s*\(\s*typeof\s+module\s*!==\s*['"]undefined['"]\s*&&\s*module\.exports\s*\)\s*\{[\s\S]*?(?=\n|$)/g, "");

  fs.writeFileSync(path.join(destDir, file), content);
}
console.log("Fixed module exports.");
