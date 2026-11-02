import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-square-dashed",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={pivot(3, 21)}
		>
			<motion.path
				{...part(pose({ opacity: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.1 }))}
				d="M10 17H7l-4 4v-7"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.18 }))}
				d="M14 17h1"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.26 }))}
				d="M14 3h1"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.33999999999999997 }),
				)}
				d="M19 3a2 2 0 0 1 2 2"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.42000000000000004 }),
				)}
				d="M21 14v1a2 2 0 0 1-2 2"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.1 }))}
				d="M21 9v1"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.18 }))}
				d="M3 9v1"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.26 }))}
				d="M5 3a2 2 0 0 0-2 2"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 0.2, 1] }, { duration: 0.4, times: [0, 0.5, 1], delay: 0.33999999999999997 }),
				)}
				d="M9 3h1"
			/>
		</motion.g>
	),
});
