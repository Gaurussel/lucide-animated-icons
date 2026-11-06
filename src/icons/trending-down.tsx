import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const surge = pose(
	{ x: [0, -1.2, 1.8, 0], y: [0, -1.2, 1.8, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const tip = pose(
	{ x: [0, 0, 1.5, 0], y: [0, 0, 1.5, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "trending-down",
	render: (part) => (
		<motion.g {...part(surge)}>
			<motion.path {...part(tip)} d="M16 17h6v-6" />
			<path d="m22 17-8.5-8.5-5 5L2 7" />
		</motion.g>
	),
});
