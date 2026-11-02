import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ratio",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.7, 1, 1] }, { duration: 0.9, times: [0, 0.3, 0.5, 1] }))}
				height="20"
				rx="2"
				style={centered}
				width="12"
				x="6"
				y="2"
			/>
			<motion.rect
				{...part(pose({ scaleX: [1, 1, 0.7, 1] }, { duration: 0.9, times: [0, 0.4, 0.7, 1] }))}
				height="12"
				rx="2"
				style={centered}
				width="20"
				x="2"
				y="6"
			/>
		</>
	),
});
