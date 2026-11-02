import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, ring, snap } from "../helpers.ts";

const shoot = pose(
	{ x: [0, -4, 3, 0], rotate: [0, 0, -28, 0] },
	{ duration: 0.65, times: [0, 0.18, 0.34, 1], ease: ["easeInOut", snap, ring] },
);
const stretch = pose({ pathLength: [1, 0.2, 1] }, { duration: 0.65, times: [0, 0.18, 1], ease: ["easeInOut", snap] });

export default createAnimatedIcon({
	name: "minus",
	render: (part) => (
		<motion.g {...part(shoot)} style={centered}>
			<motion.path {...part(stretch)} d="M5 12h14" />
		</motion.g>
	),
});
