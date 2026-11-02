import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "scan-face",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.6, 1.6, 0, 0], y: [0, 1.6, 1.6, 0, 0] },
						{ duration: 0.85, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M3 7V5a2 2 0 0 1 2-2h2"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.6, -1.6, 0, 0], y: [0, 1.6, 1.6, 0, 0] },
						{ duration: 0.85, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M17 3h2a2 2 0 0 1 2 2v2"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.6, -1.6, 0, 0], y: [0, -1.6, -1.6, 0, 0] },
						{ duration: 0.85, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M21 17v2a2 2 0 0 1-2 2h-2"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.6, 1.6, 0, 0], y: [0, -1.6, -1.6, 0, 0] },
						{ duration: 0.85, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M7 21H5a2 2 0 0 1-2-2v-2"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 1.6, 1, 1] }, { duration: 0.85, times: [0, 0.55, 0.75, 0.9, 1] }))}
				d="M8 14s1.5 2 4 2 4-2 4-2"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0, 1, 1] }, { duration: 0.85, times: [0, 0.3, 0.38, 0.5, 1] }))}
				d="M9 9h.01"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0, 1, 1] }, { duration: 0.85, times: [0, 0.3, 0.38, 0.5, 1] }))}
				d="M15 9h.01"
			/>
		</>
	),
});
