import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const tuck = pose(
	{ x: [0, 2.4, -1.8, 0], y: [0, 2.4, -1.8, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.25, 0.26, 1], ease: ["easeIn", "easeInOut", springy] },
);
const grow = pose(
	{ scale: [1, 1, 1.18, 1] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "picture-in-picture",
	render: (part) => (
		<>
			<motion.g {...part(tuck)}>
				<path d="M2 10h6V4" />
				<path d="m2 4 6 6" />
			</motion.g>
			<path d="M21 10V7a2 2 0 0 0-2-2h-7" />
			<path d="M3 14v2a2 2 0 0 0 2 2h3" />
			<motion.rect {...part(grow)} height="7" rx="1" style={edge(1, 1)} width="10" x="12" y="14" />
		</>
	),
});
