const fs = require("fs");
const path = require("path");

function fixPoses(filepath) {
  let content = fs.readFileSync(filepath, "utf-8");
  // Some files have dangling `module.exports = { ... }; }` due to partial cleanup
  content = content.replace(/module\.exports\s*=\s*\{[^}]*\};\s*\}/g, "");
  // just generally remove any standalone module.exports line
  content = content.replace(/module\.exports\s*=\s*\{[^}]*\};/g, "");
  // remove any dangling `}` at the end of the file left behind
  content = content.replace(/^\s*\}\s*$/gm, "");
  fs.writeFileSync(filepath, content);
}

const posesDir = "CharacterUniverseReact/src/data/poses";
fixPoses(path.join(posesDir, "poselibraryv11_clean.ts"));
fixPoses(path.join(posesDir, "post_cleanup_pose_expansion_final_79.ts"));
fixPoses(path.join(posesDir, "v11_1_x2_camera_driven_glamour_pose_pack_20.ts"));
console.log("Fixed poses again.");
