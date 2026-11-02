import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "candy-cane",
	render: (part) => (
		<motion.g {...part(pose({ rotate: [0, -6, 0] }, { duration: 0.8, times: [0, 0.5, 1] }))} style={pivot(4, 21)}>
			<path d="M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" />
			<motion.path
				{...part(pose({ x: [0, -1.2, 0], y: [0, 1.8, 0] }, { duration: 0.5, delay: 0.25, times: [0, 0.5, 1] }))}
				d="M17.75 7 15 2.1"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.2, 0], y: [0, 1.8, 0] }, { duration: 0.5, delay: 0.32, times: [0, 0.5, 1] }))}
				d="M10.9 4.8 13 9"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.2, 0], y: [0, 1.8, 0] }, { duration: 0.5, delay: 0.39, times: [0, 0.5, 1] }))}
				d="m7.9 9.7 2 4.4"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.2, 0], y: [0, 1.8, 0] }, { duration: 0.5, delay: 0.46, times: [0, 0.5, 1] }))}
				d="M4.9 14.7 7 18.9"
			/>
		</motion.g>
	),
});
