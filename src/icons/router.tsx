import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "router",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.85, 1, 1] }, { duration: 0.9, times: [0, 0.1, 0.35, 1] }))}
				height="8"
				rx="2"
				style={edge(0.5, 1)}
				width="20"
				x="2"
				y="14"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.4, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.35, 0.6, 1] }))}
				d="M15 10v4"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(
					pose(
						{ opacity: [1, 1, 0.1, 1, 0.1, 1, 1] },
						{ duration: 0.9, times: [0, 0.15, 0.22, 0.38, 0.5, 0.62, 1] },
					),
				)}
				d="M6.01 18H6"
			/>
			<motion.path
				{...part(
					pose(
						{ opacity: [1, 1, 0.1, 1, 0.1, 1, 1] },
						{ duration: 0.9, times: [0, 0.3, 0.37, 0.52, 0.64, 0.76, 1] },
					),
				)}
				d="M10.01 18H10"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, -2.5, 0, 0], opacity: [1, 1, 0.15, 1, 1] },
						{ duration: 0.9, times: [0, 0.2, 0.4, 0.6, 1] },
					),
				)}
				d="M17.84 7.17a4 4 0 0 0-5.66 0"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, -3, 0, 0], opacity: [1, 1, 0.15, 1, 1] },
						{ duration: 0.9, times: [0, 0.35, 0.55, 0.75, 1] },
					),
				)}
				d="M20.66 4.34a8 8 0 0 0-11.31 0"
			/>
		</>
	),
});
