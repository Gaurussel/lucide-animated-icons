import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "heading",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.45, 1, 1] }, { duration: 0.75, times: [0, 0.3, 0.65, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M6 20V4" />
				<path d="M18 20V4" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.2, 0.5, 1] }))}
				d="M6 12h12"
			/>
		</>
	),
});
