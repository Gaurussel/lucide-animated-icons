import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const head = pose(
	{ y: [0, 1.5, -4, 0], x: [0, 0, 0.5, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const shoulders = pose(
	{ y: [0, 0, -2, 0] },
	{ duration: 0.72, times: [0, 0.24, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

const spin = pose(
	{ scale: [1, 1, 0.6, 1], rotate: [0, 0, 0, 360] },
	{ duration: 0.72, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "user-round-x",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M2 21a8 8 0 0 1 11.873-7" />
			<motion.circle {...part(head)} cx="10" cy="8" r="5" />
			<motion.g {...part(spin)} style={pivot(19.5, 19.5)}>
				<path d="m17 17 5 5" />
				<path d="m22 17-5 5" />
			</motion.g>
		</>
	),
});
