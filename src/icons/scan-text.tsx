import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "scan-text",
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
				{...part(pose({ scaleX: [1, 1, 0.3, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.32, 0.5, 1] }))}
				d="M7 8h8"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.3, 1, 1] }, { duration: 0.85, times: [0, 0.32, 0.44, 0.62, 1] }))}
				d="M7 12h10"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.3, 1, 1] }, { duration: 0.85, times: [0, 0.44, 0.56, 0.74, 1] }))}
				d="M7 16h6"
				style={edge(0, 0.5)}
			/>
		</>
	),
});
