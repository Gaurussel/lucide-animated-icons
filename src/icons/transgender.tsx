import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const gather = pose(
	{ scale: [1, 0.75, 1.15, 1] },
	{ duration: 0.72, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const burst = (x: number, y: number, delay: number) =>
	pose(
		{ x: [0, -x / 2, x, 0], y: [0, -y / 2, y, 0] },
		{ duration: 0.65, delay, times: [0, 0.15, 0.32, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "transgender",
	render: (part) => (
		<>
			<motion.circle {...part(gather)} cx="12" cy="12" r="4" style={centered} />
			<motion.g {...part(burst(3, -3, 0.05))}>
				<path d="M18 2h4v4" />
				<path d="m22 2-7.17 7.17" />
			</motion.g>
			<motion.g {...part(burst(-3, -3, 0.11))}>
				<path d="m2 2 7.17 7.17" />
				<path d="M2 5.355V2h3.357" />
				<path d="M8 5 5 8" />
			</motion.g>
			<motion.g {...part(burst(0, 3.5, 0.17))}>
				<path d="M12 16v6" />
				<path d="M14 20h-4" />
			</motion.g>
		</>
	),
});
