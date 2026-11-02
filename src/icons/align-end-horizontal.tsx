import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "align-end-horizontal",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.5, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				height="16"
				rx="2"
				style={edge(0.5, 1)}
				width="6"
				x="4"
				y="2"
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.5, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.4, 1] }))}
				height="9"
				rx="2"
				style={edge(0.5, 1)}
				width="6"
				x="14"
				y="9"
			/>
			<path d="M22 22H2" />
		</>
	),
});
