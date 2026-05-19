const fs = require("fs");
const path = require("path");

const filesToConvert = [
  { src: "CharacterUniverse HTML/poselibraryv11_clean.js", dest: "CharacterUniverseReact/src/data/poses/poselibraryv11_clean.ts" },
  { src: "CharacterUniverse HTML/pose_packs/post_cleanup_pose_expansion_final_79.js", dest: "CharacterUniverseReact/src/data/poses/post_cleanup_pose_expansion_final_79.ts" },
  { src: "CharacterUniverse HTML/pose_packs/v11_1_x2_camera_driven_glamour_pose_pack_20.js", dest: "CharacterUniverseReact/src/data/poses/v11_1_x2_camera_driven_glamour_pose_pack_20.ts" }
];

for (const { src, dest } of filesToConvert) {
  let content = fs.readFileSync(src, "utf-8");

  content = content.replace(/^const\s+([a-zA-Z0-9_]+)\s*=\s*\[/gm, "export const $1 = [");
  content = content.replace(/^const\s+([a-zA-Z0-9_]+)\s*=\s*\{/gm, "export const $1 = {");

  content = content.replace(/if\s*\(\s*typeof\s+window\s*!==\s*['"]undefined['"]\s*\)\s*\{[\s\S]*?\}/g, "");
  content = content.replace(/if\s*\(\s*typeof\s+module\s*!==\s*['"]undefined['"]\s*\)\s*\{[\s\S]*?\}/g, "");

  fs.writeFileSync(dest, content);
}
console.log("Converted pose files.");
