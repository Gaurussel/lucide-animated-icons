import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "microchip",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1] }))}
				d="M4 4h2"
				style={edge(1, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1], delay: 0.06 }))}
				d="M4 8h2"
				style={edge(1, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1], delay: 0.12 }))}
				d="M4 12h2"
				style={edge(1, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1], delay: 0.18 }))}
				d="M4 16h2"
				style={edge(1, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1], delay: 0.24 }))}
				d="M4 20h2"
				style={edge(1, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1], delay: 0.24 }))}
				d="M18 4h2"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1], delay: 0.18 }))}
				d="M18 8h2"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1], delay: 0.12 }))}
				d="M18 12h2"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1], delay: 0.06 }))}
				d="M18 16h2"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1] }))}
				d="M18 20h2"
				style={edge(0, 0.5)}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.93, 1, 1] }, { duration: 0.75, times: [0, 0.35, 0.65, 1] }))}
				d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"
				style={centered}
			/>
		</>
	),
});
