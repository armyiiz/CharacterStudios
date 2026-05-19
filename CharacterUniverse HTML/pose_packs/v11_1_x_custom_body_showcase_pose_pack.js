// V11.1.X Camera-Driven Glamour Pose Pack
// 30 no-item-safe camera-led glamour/body showcase poses.

const CAMERA_DRIVEN_GLAMOUR_META = {
  category: "glamour_showcase",
  subcategory: "camera_driven_body_showcase",
  uiCategory: "camera_driven_glamour",
  uiCategoryTH: "หมวดตากล้อง",
  intensity: "safe",
  requiresItem: false,
  noItemSafe: true,
  itemActionType: "none",
  compatibleItemRoles: ["none"],
  preferredItemRoles: ["none"],
  avoidItemRoles: ["weapon", "large_weapon", "dual_item", "instrument_item", "document_item", "tool_item", "ritual_item"],
  compatiblePresentationModes: ["glamour", "lifestyle", "royal", "portrait", "fashion_editorial"],
  avoidRiskTags: ["large_weapon", "dual_item", "active_attack", "ranged_weapon"],
  itemPlacementRule: "No-item camera-driven glamour pose. Hide this pose in with-item mode for weapon, instrument, document, tool, ritual, or large-item characters.",
  noItemRule: "Both hands are empty. Do not add handheld objects or detached objects.",
  negativeAdditions: [
    "extra hands", "extra arms", "extra fingers", "broken anatomy", "twisted torso beyond natural range",
    "floating weapon", "detached item", "weapon swing", "combat attack", "item covering face", "item covering chest",
    "overly cluttered details", "flat front-facing standing pose", "neutral idle pose", "stiff symmetrical pose"
  ],
  collectionTags: ["glamour", "camera_driven_glamour", "body_showcase", "no_item"]
};

const CAMERA_DRIVEN_GLAMOUR_POSE_ROWS = [
  ["V11X-CG-01", "Top-Down Spiral Recline", "มุมสูงนอนโค้งเกลียว S-Curve", "true bird's-eye / top-down", "full_body / thigh_up", "top-down bird's-eye camera view, character reclining diagonally across the frame, body arranged in a graceful spiral S-curve, torso gently twisted, one arm above or beside the head, the other hand near waist or floor, legs layered diagonally with one knee softly bent."],
  ["V11X-CG-02", "High-Angle Kneeling Floor-Hand", "มุมสูงคุกเข่าเอนตัว มือแตะพื้นหน้าเลนส์", "high-angle three-quarter", "full_body / thigh_up", "high-angle three-quarter view looking slightly down, character kneeling on both knees and leaning forward, upper body closer to camera than hips, one hand placed on the floor in the foreground, other hand near cheek or collarbone, torso bent in a graceful forward S-curve."],
  ["V11X-CG-03", "Extreme Low-Angle Kneeling Reach", "มุมต่ำติดพื้นคุกเข่าเอื้อมมือเข้าเลนส์", "floor-level worm's-eye", "thigh_up / full_body", "extreme low-angle floor-level camera looking upward, character kneeling with one knee forward, torso leaning over the camera, one arm reaching toward the lens with dramatic foreshortening, other hand resting near thigh or hip."],
  ["V11X-CG-04", "Worm's-Eye Standing Arch", "มุมเงยยืนแอ่นตัว แขนยกเหนือศีรษะ", "low-angle below waist level", "thigh_up / full_body", "worm's-eye low-angle camera from below waist level, character standing tall with torso arched upward, arms raised above or curved behind the head, hips shifted to one side, elongated waist and legs."],
  ["V11X-CG-05", "Rear Three-Quarter Over-Shoulder", "มุมหลังสามส่วนหันไหล่มองกล้อง", "rear three-quarter, slightly low", "thigh_up / waist_up", "rear three-quarter camera angle from a slightly low viewpoint, character turned mostly away from the viewer, hips angled to one side, elegant back curve visible, head looking back over the shoulder toward the camera."],
  ["V11X-CG-06", "Side-Lying Editorial Curve", "มุมข้างต่ำเอนนอน โชว์เส้นโค้งลำตัว", "low side camera", "full_body / thigh_up", "low side camera near floor level, character reclining sideways on one elbow, torso lifted slightly, waist curved into an elegant S-line, one leg extended diagonally and the other bent forward."],
  ["V11X-CG-07", "Seated Edge High-Angle Twist", "มุมสูงนั่งขอบแท่นบิดตัวเข้ากล้อง", "high-angle from above front-side", "full_body / thigh_up", "high-angle three-quarter camera looking down, character seated on the edge of a simple platform, one leg hanging or extending downward, the other bent across the seat, torso twisting upward toward the viewer."],
  ["V11X-CG-08", "Dutch-Angle Floating Diagonal", "กล้องเอียงดัตช์ บอดี้เฉียงตัดเฟรม", "tilted dutch angle", "full_body", "tilted dutch-angle camera, full body arranged diagonally across the frame, one leg extended long across the composition, the other softly bent, torso twisted into a graceful S-curve, elegant motion, non-combat fashion energy."],
  ["V11X-CG-09", "Close Foreground Hand Frame", "โคลสอัพมือหน้าเลนส์กรอบใบหน้า", "close-up foreground perspective", "bust / waist_up", "close foreground perspective, one hand near the lens creating depth and framing the face without fully covering it, face visible behind the foreground hand, other hand resting near shoulder, collarbone, or waist."],
  ["V11X-CG-10", "Low-Angle Platform Step", "มุมต่ำก้าวขึ้นแท่น เน้นขาและสะโพก", "low-angle front three-quarter", "full_body / thigh_up", "low-angle front three-quarter camera, one foot placed on a higher step or platform, the other leg lower and extended, hips strongly tilted, torso leaning or twisting toward the viewer."],
  ["V11X-CG-11", "Overhead Hair-Fan Recline", "มุมสูงใกล้ นอนฮาโลผมรอบใบหน้า", "top-down close overhead", "waist_up / full_body", "top-down close overhead camera, character reclining on the back or half-side, head near the upper frame, torso slightly diagonal, one arm curved above or around the head, hair or fabric spreading in a clean halo-like shape."],
  ["V11X-CG-12", "Floor-Level Side Kneel Silhouette", "มุมข้างติดพื้น คุกเข่าเป็นซิลูเอต", "floor-level side view", "full_body / thigh_up", "floor-level side camera, character kneeling in side silhouette, one knee down and the other leg forward or raised, torso arched slightly backward, clean curve from knee through waist to chest."],
  ["V11X-CG-13", "Close Waist-Up Twisted Overhead Look", "มุมสูงโคลสอัพบิดเอวมองขึ้น", "high-angle close-up", "waist_up / bust", "high-angle close-up camera looking down, waist-up framing, torso twisting toward camera while hips angle away out of frame, one shoulder closer to the lens, head tilted up toward the viewer."],
  ["V11X-CG-14", "Low-Angle Back Arch Profile", "มุมต่ำด้านหลังโปรไฟล์ แอ่นตัวเงยหน้า", "low-angle side-rear", "thigh_up / full_body", "low-angle side-rear camera looking upward, character in profile or three-quarter back view, torso arched elegantly, chin lifted, arms curved near the head or behind the body, hips creating a strong waist curve."],
  ["V11X-CG-15", "Seated Floor Twist With Long Leg", "มุมต่ำนั่งพื้น ขายาวพุ่งเข้าเลนส์", "low front-side camera", "full_body", "low front-side camera near floor level, character seated on the floor, one leg extended diagonally toward camera, the other bent close to the body, torso twisting toward the viewer."],
  ["V11X-CG-16", "High-Angle Shoulder-First Lean", "มุมสูงเอนไหล่เข้าเลนส์", "high-angle front-side", "waist_up / thigh_up", "high-angle front-side camera, character leaning shoulder-first toward the lens, one shoulder and upper arm closest to camera, torso rolling diagonally, head turned up toward the viewer."],
  ["V11X-CG-17", "Reclining Elbow Close Crop", "ครอปใกล้เอนศอก โชว์เส้นเอว", "low close side-front", "waist_up / thigh_up", "low close side-front camera, thigh-up or waist-up crop, character reclining on one elbow, one shoulder forward, torso curving through the waist, hips continuing out of frame."],
  ["V11X-CG-18", "Tilted Camera Over-Shoulder Seated Pose", "กล้องเอียงมุมหลัง นั่งหันไหล่มองกลับ", "tilted rear-side high angle", "thigh_up / waist_up", "tilted dutch-angle rear-side high camera, character seated turned away from the viewer, hips and back creating the foreground silhouette, torso twisting so the face looks back over the shoulder."],
  ["V11X-CG-19", "Front Foreshortened Knee Pose", "มุมต่ำเข่าหน้าเลนส์ บอดี้ลึก", "low front close", "thigh_up / full_body", "low front close camera, one knee or thigh close to the lens with strong foreshortening, torso rising behind it and twisting toward the viewer, one hand resting naturally on the foreground knee."],
  ["V11X-CG-20", "Vertical Crop Looking-Down Power Pose", "ครอปแนวตั้งมุมต่ำ มองลงมาที่กล้อง", "low close upward", "waist_up / thigh_up", "low close upward camera, vertical crop, character looking down toward the viewer, torso dominating the frame, hips angled, shoulders tilted, one hand near waist or hip and the other near hair or shoulder."],
  ["V11X-CG-21", "Low-Angle Runway Power Curve", "มุมต่ำทรงพลังแบบรันเวย์ เน้นช่วงขา", "low-angle at knee or waist height", "full_body / thigh_up", "low-angle fashion photographer shot from knee or waist height, character in a confident runway stance, one leg forward with a long clean line, hip tilted, torso arched gracefully, one hand at the waist and the other relaxed near the thigh."],
  ["V11X-CG-22", "Dutch-Angle Twisted Waist Glance", "กล้องเอียงบิดเอว มองเฉียงกลับแบบแฟชั่น", "subtle dutch-angle three-quarter", "waist_up / thigh_up", "subtle dutch-angle glamour camera, character twisting at the waist while glancing back over one shoulder, one hand lightly touching the upper arm, the other near the waistline, diagonal body flow from shoulder to hip."],
  ["V11X-CG-23", "Side Profile Arch With Shoulder Focus", "โปรไฟล์ด้านข้างแอ่นตัว เน้นไหล่และเอว", "strong side angle at chest height", "thigh_up / waist_up", "side-profile beauty photoshoot angle, character arching the back gently with one shoulder rolled toward the camera, one hand near the neck and the other tracing the waist, elegant hourglass silhouette, face turned slightly back toward the viewer."],
  ["V11X-CG-24", "Diagonal Walk-In Frame Shot", "ก้าวเดินเฉียงเข้ากรอบแบบนางแบบ", "low three-quarter walking capture", "full_body / thigh_up", "dynamic walk-in-frame fashion shot, character stepping diagonally into the composition, one foot forward, hips swaying naturally, torso angled opposite the legs, one hand near the waist and the other brushing hair back."],
  ["V11X-CG-25", "Beauty Campaign Chin-Lift Compression", "ครอปบิวตี้เชิดคางแบบแคมเปญความงาม", "close medium with slight telephoto compression", "bust / waist_up", "beauty campaign portrait shot with slight telephoto compression, character lifting the chin subtly, shoulders angled asymmetrically, one hand framing the jawline without covering the lips or eyes, the other near the upper chest."],
  ["V11X-CG-26", "Close Lens Reaching Hand Perspective", "โคลสเลนส์เอื้อมมือเฉียงหน้าแบบเพอร์สเปกทีฟ", "medium-close three-quarter front perspective", "waist_up / bust", "fashion portrait from a medium-close three-quarter front angle, one hand softly reaching toward the lens with mild foreshortening while keeping the face visible, the other hand at the hip or waist, body leaning subtly forward."],
  ["V11X-BS-01", "High-Angle Forward Lean Diagonal S-Curve", "มุมสูงเอนตัว S-Curve เฉียงหน้าเลนส์", "high-angle diagonal front-side", "thigh_up / full_body", "high-angle editorial camera looking down from a diagonal front-side angle, character leaning forward into an elegant diagonal S-curve, one shoulder closer to the lens, hips subtly shifted back, chin lifted toward camera, one hand near the collarbone and the other near the hip."],
  ["V11X-BS-02", "Centered Kneeling Floor-Hand Goddess Pose", "คุกเข่ากลางเฟรม มือแตะพื้นแบบเทพี", "centered high-angle three-quarter", "full_body", "centered high-angle kneeling goddess pose, character kneeling gracefully on both knees, one hand touching the floor near the body, torso upright but softly leaning, other hand near collarbone or thigh, balanced editorial body-showcase composition."],
  ["V11X-BS-03", "High-Angle Twisted Teasing Hand Pose", "มุมสูงบิดตัวเย้ายวน มือจัดกรอบลำตัว", "high-angle three-quarter", "waist_up / thigh_up", "high-angle three-quarter glamour camera, character twisting the torso with hips angled away, shoulders tilted, one hand framing the upper body near the collarbone or shoulder, the other hand resting near the waist or hip."],
  ["V11X-BS-04", "Low-Angle Reaching Hand Glamour Pose", "มุมต่ำเอื้อมมือเข้าเลนส์แบบแฟชั่น", "low-angle close perspective", "waist_up / thigh_up", "low-angle glamour camera close to the body, character leaning toward the lens with one hand reaching softly forward, dramatic but elegant foreshortened hand not covering the face, the other hand resting near the waist or hip."]
];

function cameraDrivenGlamourPose(row) {
  const [id, title, titleTH, camera, framing, snippet] = row;
  const prompt = `Camera/framing first: ${camera}; ${framing}. ${snippet}`;
  return {
    id,
    title,
    titleTH,
    descriptionTH: `${titleTH} - camera-driven glamour body showcase pose with clean readable silhouette and no handheld object.`,
    ...CAMERA_DRIVEN_GLAMOUR_META,
    camera,
    framing,
    prompt,
    noItemPrompt: `${prompt} Both hands empty; no handheld objects.`
  };
}

const v11xCustomBodyShowcasePoses = CAMERA_DRIVEN_GLAMOUR_POSE_ROWS.map(cameraDrivenGlamourPose);

if (typeof window !== "undefined") { window.v11xCustomBodyShowcasePoses = v11xCustomBodyShowcasePoses; }

if (typeof module !== "undefined" && module.exports) { module.exports = { v11xCustomBodyShowcasePoses }; }
