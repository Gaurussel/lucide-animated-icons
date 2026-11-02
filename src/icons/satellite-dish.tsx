import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "satellite-dish",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -6, 12, 0, 0] }, { duration: 0.9, times: [0, 0.15, 0.5, 0.8, 1] }))}
				style={pivot(9, 15)}
			>
				<path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
				<path d="m9 15 3-3" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 1, 0, 0], y: [0, 0, -1, 0, 0], opacity: [1, 1, 0.15, 1, 1] },
						{ duration: 0.9, times: [0, 0.45, 0.6, 0.8, 1] },
					),
				)}
				d="M17 13a6 6 0 0 0-6-6"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 0, 1.4, 0, 0], y: [0, 0, -1.4, 0, 0], opacity: [1, 1, 0.15, 1, 1] },
						{ duration: 0.9, times: [0, 0.55, 0.7, 0.9, 1] },
					),
				)}
				d="M21 13A10 10 0 0 0 11 3"
			/>
		</>
	),
});
