const fs = require("fs");
const path = require("path");

const destDir = "CharacterUniverseReact/src/data/characters";
const files = fs.readdirSync(destDir).filter(f => f.endsWith(".ts") && f !== "index.ts");

for (const file of files) {
  let content = fs.readFileSync(path.join(destDir, file), "utf-8");

  // Some files had trailing window/module checks that left random `}` behind.
  // We'll just clean up trailing orphaned braces.

  content = content.replace(/;\s*\}\s*$/g, ";");
  content = content.replace(/\];\s*\}\s*$/g, "];");
  content = content.replace(/\s*\}\s*$/g, ""); // if there is an orphaned } at the very end
  // Ensure array/object actually ends properly

  fs.writeFileSync(path.join(destDir, file), content);
}
console.log("Fixed trailing braces.");
