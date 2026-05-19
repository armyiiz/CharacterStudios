const fs = require("fs");
const path = require("path");

function removeModuleExports(filepath) {
  if (!fs.existsSync(filepath)) return;
  let content = fs.readFileSync(filepath, "utf-8");
  content = content.replace(/if\s*\(\s*typeof\s+module\s*!==\s*['"]undefined['"]\s*&&\s*module\.exports\s*\)\s*\{[\s\S]*?(?=\n|$)/g, "");
  content = content.replace(/if\s*\(\s*typeof\s+module\s*!==\s*['"]undefined['"]\s*\)\s*\{[\s\S]*?(?=\n|$)/g, "");
  fs.writeFileSync(filepath, content);
}

const charsDir = "CharacterUniverseReact/src/data/characters";
removeModuleExports(path.join(charsDir, "characters_heavenly_kami_war_court.ts"));
removeModuleExports(path.join(charsDir, "characters_heavenly_kami_war_court_expansion_2.ts"));
removeModuleExports(path.join(charsDir, "characters_heavenly_kami_war_court_expansion_3.ts"));
removeModuleExports(path.join(charsDir, "characters_solar_necropolis_egypt.ts"));
removeModuleExports(path.join(charsDir, "characters_solar_necropolis_egypt_expansion_2.ts"));

const posesDir = "CharacterUniverseReact/src/data/poses";
removeModuleExports(path.join(posesDir, "poselibraryv11_clean.ts"));
removeModuleExports(path.join(posesDir, "post_cleanup_pose_expansion_final_79.ts"));
removeModuleExports(path.join(posesDir, "v11_1_x2_camera_driven_glamour_pose_pack_20.ts"));

console.log("Cleaned module.exports from remaining files.");
