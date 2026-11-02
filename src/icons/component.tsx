import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "component",
	render: (part) => (
		<motion.g {...part(pose({ rotate: 360 }, { duration: 0.9, reset: true }))} style={pivot(12, 12)}>
			<motion.path
				{...part(pose({ x: [0, -2, -2, 0] }, { duration: 0.9, times: [0, 0.25, 0.55, 1] }))}
				d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
			/>
			<motion.path
				{...part(pose({ x: [0, 2, 2, 0] }, { duration: 0.9, times: [0, 0.25, 0.55, 1] }))}
				d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"
			/>
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.9, times: [0, 0.25, 0.55, 1] }))}
				d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"
			/>
			<motion.path
				{...part(pose({ y: [0, 2, 2, 0] }, { duration: 0.9, times: [0, 0.25, 0.55, 1] }))}
				d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
			/>
		</motion.g>
	),
});
