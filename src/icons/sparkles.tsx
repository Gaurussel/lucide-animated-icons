import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const twirl = pose(
	{ scale: [1, 0.76, 1.15, 1], rotate: [0, 0, -9.9, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.38, 1], ease: ["easeInOut", snap, springy], reset: true },
);
const twinkle = (delay: number) =>
	pose(
		{ scale: [1, 0.4, 1.36, 1], rotate: [0, 0, 27, 0] },
		{ duration: 0.55, delay, times: [0, 0.2, 0.45, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "sparkles",
	render: (part) => (
		<>
			<motion.path
				{...part(twirl)}
				d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
				style={centered}
			/>
			<motion.g {...part(twinkle(0.12))} style={centered}>
				<path d="M20 3v4" />
				<path d="M22 5h-4" />
			</motion.g>
			<motion.g {...part(twinkle(0.2))} style={centered}>
				<path d="M4 17v2" />
				<path d="M5 18H3" />
			</motion.g>
		</>
	),
});
