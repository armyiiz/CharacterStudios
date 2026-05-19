const fs = require("fs");
const path = require("path");

function removeModuleExports(filepath) {
  if (!fs.existsSync(filepath)) return;
  let content = fs.readFileSync(filepath, "utf-8");
  // Some files have `if (typeof module !== "undefined" && module.exports) { module.exports = ... }`
  content = content.replace(/if\s*\(\s*typeof\s+module\s*!==\s*['"]undefined['"]\s*&&\s*module\.exports\s*\)\s*\{[\s\S]*?(?=\n|$)/g, "");
  content = content.replace(/if\s*\(\s*typeof\s+module\s*!==\s*['"]undefined['"]\s*\)\s*\{[\s\S]*?(?=\n|$)/g, "");
  content = content.replace(/module\.exports\s*=\s*\{[\s\S]*?\};/g, "");
  fs.writeFileSync(filepath, content);
}

const charsDir = "CharacterUniverseReact/src/data/characters";
removeModuleExports(path.join(charsDir, "characters_heavenly_kami_war_court.ts"));
removeModuleExports(path.join(charsDir, "characters_heavenly_kami_war_court_expansion_2.ts"));
removeModuleExports(path.join(charsDir, "characters_heavenly_kami_war_court_expansion_3.ts"));
removeModuleExports(path.join(charsDir, "characters_solar_necropolis_egypt.ts"));
removeModuleExports(path.join(charsDir, "characters_solar_necropolis_egypt_expansion_2.ts"));

console.log("Cleaned module.exports from characters files.");
