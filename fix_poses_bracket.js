const fs = require("fs");
const path = require("path");

function fixPosesBracket(filepath) {
  let content = fs.readFileSync(filepath, "utf-8");
  // The files are missing a closing brace `}` before the `];`
  content = content.replace(/\n\];/g, "\n  }\n];");
  fs.writeFileSync(filepath, content);
}

const posesDir = "CharacterUniverseReact/src/data/poses";
fixPosesBracket(path.join(posesDir, "poselibraryv11_clean.ts"));
fixPosesBracket(path.join(posesDir, "post_cleanup_pose_expansion_final_79.ts"));
fixPosesBracket(path.join(posesDir, "v11_1_x2_camera_driven_glamour_pose_pack_20.ts"));
console.log("Fixed poses brackets.");
