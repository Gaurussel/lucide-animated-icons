import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tickets-plane",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.5, 7, -6, 0], y: [0, 1.5, -6, 5, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.8, times: [0, 0.18, 0.55, 0.56, 1] },
					),
				)}
			>
				<path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" />
				<path d="m12 13.5 3.75.5" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ y: [0, -1.5, -1.5, 0], rotate: [0, -14, -14, 0] },
						{ duration: 0.8, times: [0, 0.25, 0.6, 1] },
					),
				)}
				d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"
				style={pivot(4.5, 8)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 1] }, { duration: 0.4, delay: 0.15, times: [0, 0.5, 1] }))}
				d="M6 10V8"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 1] }, { duration: 0.4, delay: 0.3, times: [0, 0.5, 1] }))}
				d="M6 14v1"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 1] }, { duration: 0.4, delay: 0.45, times: [0, 0.5, 1] }))}
				d="M6 19v2"
				style={centered}
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.88, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.5, 1] }))}
				height="13"
				rx="2"
				style={edge(0.5, 1)}
				width="20"
				x="2"
				y="8"
			/>
		</>
	),
});
