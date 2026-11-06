import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const head = pose(
	{ y: [0, 0.9, -2.4, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const shoulders = pose(
	{ y: [0, 0, -1.2, 0] },
	{ duration: 0.72, times: [0, 0.24, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const friend = pose(
	{ x: [0, 0, 1.2, 0], y: [0, 0, -2.1, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.46, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "users",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<motion.circle {...part(head)} cx="9" cy="7" r="4" />
			<motion.g {...part(friend)}>
				<path d="M16 3.128a4 4 0 0 1 0 7.744" />
				<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			</motion.g>
		</>
	),
});
