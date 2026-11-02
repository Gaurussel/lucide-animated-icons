import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "scan-search",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.6, 1.6, 0, 0], y: [0, 1.6, 1.6, 0, 0] },
						{ duration: 0.9, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M3 7V5a2 2 0 0 1 2-2h2"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.6, -1.6, 0, 0], y: [0, 1.6, 1.6, 0, 0] },
						{ duration: 0.9, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M17 3h2a2 2 0 0 1 2 2v2"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.6, -1.6, 0, 0], y: [0, -1.6, -1.6, 0, 0] },
						{ duration: 0.9, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M21 17v2a2 2 0 0 1-2 2h-2"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.6, 1.6, 0, 0], y: [0, -1.6, -1.6, 0, 0] },
						{ duration: 0.9, times: [0, 0.15, 0.45, 0.75, 1] },
					),
				)}
				d="M7 21H5a2 2 0 0 1-2-2v-2"
			/>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.8, 1.5, 0, 0], y: [0, -1.2, 1.2, 0, 0], rotate: [0, -8, 6, 0, 0] },
						{ duration: 0.9, times: [0, 0.2, 0.55, 0.85, 1] },
					),
				)}
				style={centered}
			>
				<circle cx="12" cy="12" r="3" />
				<path d="m16 16-1.9-1.9" />
			</motion.g>
		</>
	),
});
