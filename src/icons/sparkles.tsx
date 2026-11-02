import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const twinkle = (delay: number) =>
	pose({ scale: [1, 1, 0.15, 1], rotate: [0, 0, 90, 0] }, { duration: 0.8, delay, times: [0, 0.4, 0.65, 1] });

export default createAnimatedIcon({
	name: "sparkles",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ scale: [1, 0.7, 1, 1], rotate: [0, -25, 0, 0] },
						{ duration: 0.8, times: [0, 0.25, 0.55, 1] },
					),
				)}
				d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
				style={centered}
			/>
			<motion.g {...part(twinkle(0.05))} style={centered}>
				<path d="M20 3v4" />
				<path d="M22 5h-4" />
			</motion.g>
			<motion.g {...part(twinkle(0.15))} style={centered}>
				<path d="M4 17v2" />
				<path d="M5 18H3" />
			</motion.g>
		</>
	),
});
