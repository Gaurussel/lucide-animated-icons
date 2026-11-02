import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-end-vertical",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleX: [1, 0.5, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				height="6"
				rx="2"
				style={edge(1, 0.5)}
				width="16"
				x="2"
				y="4"
			/>
			<motion.rect
				{...part(pose({ scaleX: [1, 0.5, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.4, 1] }))}
				height="6"
				rx="2"
				style={edge(1, 0.5)}
				width="9"
				x="9"
				y="14"
			/>
			<path d="M22 22V2" />
		</>
	),
});
