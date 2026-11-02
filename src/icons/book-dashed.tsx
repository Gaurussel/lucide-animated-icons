import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "book-dashed",
	render: (part) => (
		<motion.g
			{...part(
				pose({ y: [0, -2, -2, 0], rotate: [0, -10, -10, 0] }, { duration: 0.7, times: [0, 0.35, 0.6, 1] }),
			)}
			style={pivot(4, 22)}
		>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay: 0.18, times: [0, 0.25, 0.45, 1] }))}
				d="M12 17h1.5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay: 0.15, times: [0, 0.25, 0.45, 1] }))}
				d="M12 22h1.5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, times: [0, 0.25, 0.45, 1] }))}
				d="M12 2h1.5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay: 0.12, times: [0, 0.25, 0.45, 1] }))}
				d="M17.5 22H19a1 1 0 0 0 1-1"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay: 0.03, times: [0, 0.25, 0.45, 1] }))}
				d="M17.5 2H19a1 1 0 0 1 1 1v1.5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay: 0.09, times: [0, 0.25, 0.45, 1] }))}
				d="M20 14v3h-2.5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay: 0.06, times: [0, 0.25, 0.45, 1] }))}
				d="M20 8.5V10"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay: 0.27, times: [0, 0.25, 0.45, 1] }))}
				d="M4 10V8.5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay: 0.24, times: [0, 0.25, 0.45, 1] }))}
				d="M4 19.5V14"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay: 0.3, times: [0, 0.25, 0.45, 1] }))}
				d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.5, delay: 0.21, times: [0, 0.25, 0.45, 1] }))}
				d="M8 22H6.5a1 1 0 0 1 0-5H8"
			/>
		</motion.g>
	),
});
