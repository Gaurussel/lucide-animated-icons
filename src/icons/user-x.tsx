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
	name: "user-x",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<motion.circle {...part(head)} cx="9" cy="7" r="4" />
			<motion.g {...part(spin)} style={pivot(19.5, 10.5)}>
				<line x1="17" x2="22" y1="8" y2="13" />
				<line x1="22" x2="17" y1="8" y2="13" />
			</motion.g>
		</>
	),
});
