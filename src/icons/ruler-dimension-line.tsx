import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ruler-dimension-line",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleX: [1, 1, 0.6, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.45, 0.75, 1] }))}
				height="7"
				rx="1"
				style={centered}
				width="18"
				x="3"
				y="12"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.2, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.45, 0.75, 1] }))}
				d="M20 6H4"
				style={centered}
			/>
			<motion.path
				{...part(pose({ x: [0, 0, -6.5, 0, 0] }, { duration: 0.9, times: [0, 0.15, 0.45, 0.75, 1] }))}
				d="M20 8V4"
			/>
			<motion.path
				{...part(pose({ x: [0, 0, 6.5, 0, 0] }, { duration: 0.9, times: [0, 0.15, 0.45, 0.75, 1] }))}
				d="M4 8V4"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, 2, 0, 0], opacity: [1, 1, 0.1, 1, 1] },
						{ duration: 0.9, times: [0, 0.45, 0.55, 0.7, 1] },
					),
				)}
				d="M8 15v-3.014"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, 2, 0, 0], opacity: [1, 1, 0.1, 1, 1] },
						{ duration: 0.9, times: [0, 0.55, 0.65, 0.8, 1] },
					),
				)}
				d="M12 15v-3.014"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, 2, 0, 0], opacity: [1, 1, 0.1, 1, 1] },
						{ duration: 0.9, times: [0, 0.65, 0.75, 0.9, 1] },
					),
				)}
				d="M16 15v-3.014"
			/>
		</>
	),
});
