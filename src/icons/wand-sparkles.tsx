import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const twinkle = (index: number) =>
	pose(
		{ scale: [1, 1, 0.2, 1], rotate: [0, 0, 90, 0] },
		{ duration: 0.85, delay: index * 0.08, times: [0, 0.45, 0.7, 1] },
	);

export default createAnimatedIcon({
	name: "wand-sparkles",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 8, -18, 0] }, { duration: 0.85, times: [0, 0.2, 0.5, 1] }))}
				style={pivot(3, 21)}
			>
				<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" />
				<path d="m14 7 3 3" />
			</motion.g>
			<motion.g {...part(twinkle(0))} style={centered}>
				<path d="M5 6v4" />
				<path d="M7 8H3" />
			</motion.g>
			<motion.g {...part(twinkle(1))} style={centered}>
				<path d="M10 2v2" />
				<path d="M11 3H9" />
			</motion.g>
			<motion.g {...part(twinkle(2))} style={centered}>
				<path d="M19 14v4" />
				<path d="M21 16h-4" />
			</motion.g>
		</>
	),
});
