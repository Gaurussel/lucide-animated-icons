import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const swish = pose({ rotate: [0, -18, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const twinkle = (delay: number) =>
	pose(
		{ scale: [1, 0.2, 1.5, 1], rotate: [0, 0, 90, 0] },
		{ duration: 0.6, delay, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "wand-sparkles",
	render: (part) => (
		<>
			<motion.g {...part(swish)} style={pivot(3, 21)}>
				<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
				<path d="m14 7 3 3" />
			</motion.g>
			<motion.g {...part(twinkle(0.05))} style={pivot(5, 8)}>
				<path d="M5 6v4" />
				<path d="M7 8H3" />
			</motion.g>
			<motion.g {...part(twinkle(0.12))} style={pivot(19, 16)}>
				<path d="M19 14v4" />
				<path d="M21 16h-4" />
			</motion.g>
			<motion.g {...part(twinkle(0.18))} style={pivot(10, 3)}>
				<path d="M10 2v2" />
				<path d="M11 3H9" />
			</motion.g>
		</>
	),
});
