import { poseLibraryV11Clean } from './poselibraryv11_clean';
import { postCleanupPoseExpansionFinal79 } from './post_cleanup_pose_expansion_final_79';
import { v11x2CameraDrivenGlamourPosePack20 } from './v11_1_x2_camera_driven_glamour_pose_pack_20';

export const activePoses = [
  ...poseLibraryV11Clean,
  ...postCleanupPoseExpansionFinal79,
  ...v11x2CameraDrivenGlamourPosePack20
];

export {
  poseLibraryV11Clean,
  postCleanupPoseExpansionFinal79,
  v11x2CameraDrivenGlamourPosePack20
};
