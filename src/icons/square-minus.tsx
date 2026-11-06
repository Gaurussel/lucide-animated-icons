import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const swipe = pose(
	{ pathLength: [1, 0, 1], x: [0, -3, 0] },
	{ duration: 0.5, times: [0, 0.01, 1], ease: ["easeInOut", springy] },
);
const wobble = pose(
	{ rotate: [0, 0, -7.2, 0] },
	{ duration: 0.7, times: [0, 0.35, 0.48, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "square-minus",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.3, 0.7))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.g {...part(wobble)} style={pivot(12, 12)}>
				<motion.path {...part(swipe)} d="M8 12h8" />
			</motion.g>
		</>
	),
});
