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
	name: "users-round",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M18 21a8 8 0 0 0-16 0" />
			<motion.circle {...part(head)} cx="10" cy="8" r="5" />
			<motion.g {...part(friend)}>
				<path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
			</motion.g>
		</>
	),
});
