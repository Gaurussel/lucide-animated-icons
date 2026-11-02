import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dash = pose(
	{ y: [0, -2, 10, -8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const bob = (delay: number) =>
	pose({ y: [0, 3, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "arrow-down-a-z",
	render: (part) => (
		<>
			<motion.g {...part(dash)}>
				<path d="m3 16 4 4 4-4" />
				<path d="M7 20V4" />
			</motion.g>
			<motion.g {...part(bob(0.1))}>
				<path d="M20 8h-5" />
				<path d="M15 10V6.5a2.5 2.5 0 0 1 5 0V10" />
			</motion.g>
			<motion.g {...part(bob(0.18))}>
				<path d="M15 14h5l-5 6h5" />
			</motion.g>
		</>
	),
});
