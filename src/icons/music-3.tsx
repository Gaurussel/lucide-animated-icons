import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const bounce = pose(
	{ y: [0, 1.2, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const stem = pose(
	{ rotate: [0, 0, -16.8, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "music-3",
	render: (part) => (
		<motion.g {...part(bounce)}>
			<motion.circle {...part(jelly(0.32, 0.7))} cx="12" cy="18" r="4" style={edge(0.5, 1)} />
			<motion.path {...part(stem)} d="M16 18V2" style={pivot(16, 18)} />
		</motion.g>
	),
});
