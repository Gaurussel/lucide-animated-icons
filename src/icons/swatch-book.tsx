import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "swatch-book",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.85, 1] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				d="M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ x: [0, 0, 1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.7, 1] }))}
				d="M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.8] }))}
				d="M 7 17h.01"
			/>
			<motion.path
				{...part(pose({ rotate: [0, -22, 0, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] }))}
				d="m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
				style={pivot(10, 20)}
			/>
		</>
	),
});
