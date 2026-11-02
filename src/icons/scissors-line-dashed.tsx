import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "scissors-line-dashed",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, 0, 0.5, 1.6, 2, 1.68, 1, 0], rotate: [0, 5, 10, 0, 3.5, 7, 0, 0] },
						{ duration: 0.9, times: [0, 0.1, 0.2, 0.42, 0.5, 0.58, 0.75, 1] },
					),
				)}
				style={pivot(9, 13)}
			>
				<circle cx="4" cy="8" r="2" />
				<path d="M5.42 9.42 8 12" />
				<path d="M10.8 14.8 14 18" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ x: [0, 0, 0.5, 1.6, 2, 1.68, 1, 0], rotate: [0, -5, -10, 0, -3.5, -7, 0, 0] },
						{ duration: 0.9, times: [0, 0.1, 0.2, 0.42, 0.5, 0.58, 0.75, 1] },
					),
				)}
				style={pivot(9, 13)}
			>
				<circle cx="4" cy="16" r="2" />
				<path d="m14 6-8.58 8.58" />
			</motion.g>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.15, 1, 1] }, { duration: 0.9, times: [0, 0.45, 0.55, 0.8, 1] }))}
				d="M16 12h-2"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.15, 1, 1] }, { duration: 0.9, times: [0, 0.6, 0.7, 0.9, 1] }))}
				d="M22 12h-2"
			/>
		</>
	),
});
