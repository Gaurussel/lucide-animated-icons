import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "camera-off",
	render: (part) => (
		<>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 0.9] }))}
				x1="2"
				x2="22"
				y1="2"
				y2="22"
			/>
			<motion.g
				{...part(pose({ scaleY: [1, 0.94, 0.94, 1] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" />
				<path d="M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" />
				<motion.path
					{...part(pose({ scale: [1, 1, 0.5, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
					d="M14.121 15.121A3 3 0 1 1 9.88 10.88"
					style={centered}
				/>
			</motion.g>
		</>
	),
});
