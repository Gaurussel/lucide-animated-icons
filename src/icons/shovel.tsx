import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const dig = pose(
	{ x: [0, 0.6, -1.2, -0.6, 0], y: [0, -1.2, 1.8, 0.6, 0], rotate: [0, 4.8, 0, -12, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.3, 0.5, 1], ease: ["easeInOut", "easeIn", snap, springy] },
);
const blade = pose(
	{ rotate: [0, 0, 0, -6, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.45, 0.58, 1], ease: ["easeInOut", "easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "shovel",
	render: (part) => (
		<motion.g {...part(dig)} style={pivot(19, 5)}>
			<motion.path {...part(blade)} d="M2 22v-5l5-5 5 5-5 5z" style={pivot(9.5, 14.5)} />
			<path d="M9.5 14.5 16 8" />
			<path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2" />
		</motion.g>
	),
});
