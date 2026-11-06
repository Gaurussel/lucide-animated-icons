import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dash = pose(
	{ y: [0, -2, 10, -8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const bob = (delay: number) =>
	pose({ y: [0, 1.8, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "arrow-down-1-0",
	render: (part) => (
		<>
			<motion.g {...part(dash)}>
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
			</motion.g>
			<motion.g {...part(bob(0.1))}>
				<path d="M17 10V4h-2" />
				<path d="M15 10h4" />
			</motion.g>
			<motion.g {...part(bob(0.18))}>
				<rect height="6" ry="2" width="4" x="15" y="14" />
			</motion.g>
		</>
	),
});
