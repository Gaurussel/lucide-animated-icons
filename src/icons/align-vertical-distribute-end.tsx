import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-vertical-distribute-end",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.5, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				height="6"
				rx="2"
				style={edge(0.5, 1)}
				width="14"
				x="5"
				y="14"
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.5, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.4, 1] }))}
				height="6"
				rx="2"
				style={edge(0.5, 1)}
				width="10"
				x="7"
				y="4"
			/>
			<path d="M2 20h20" />
			<path d="M2 10h20" />
		</>
	),
});
