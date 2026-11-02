import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-horizontal-distribute-end",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleX: [1, 0.5, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				height="14"
				rx="2"
				style={edge(1, 0.5)}
				width="6"
				x="4"
				y="5"
			/>
			<motion.rect
				{...part(pose({ scaleX: [1, 0.5, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.4, 1] }))}
				height="10"
				rx="2"
				style={edge(1, 0.5)}
				width="6"
				x="14"
				y="7"
			/>
			<path d="M10 2v20" />
			<path d="M20 2v20" />
		</>
	),
});
