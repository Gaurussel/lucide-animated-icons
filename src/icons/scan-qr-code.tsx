import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "scan-qr-code",
	render: (part) => (
		<>
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
						{ x: [0, 1.6, 1.6, 0, 0], y: [0, 1.6, 1.6, 0, 0] },
						{ duration: 0.85, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M3 7V5a2 2 0 0 1 2-2h2"
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
				{...part(pose({ opacity: [1, 1, 0.1, 1, 1] }, { duration: 0.85, times: [0, 0.3, 0.4, 0.58, 1] }))}
				d="M17 12v4a1 1 0 0 1-1 1h-4"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.1, 1, 1] }, { duration: 0.85, times: [0, 0.4, 0.5, 0.68, 1] }))}
				d="M17 8V7"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.1, 1, 1] }, { duration: 0.85, times: [0, 0.5, 0.6, 0.78, 1] }))}
				d="M7 17h.01"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 0.8, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.45, 1] }))}
				height="5"
				rx="1"
				style={centered}
				width="5"
				x="7"
				y="7"
			/>
		</>
	),
});
