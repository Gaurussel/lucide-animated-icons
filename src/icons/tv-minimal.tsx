import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tv-minimal",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.6, 1] }, { duration: 0.7, times: [0, 0.5, 1] }))}
				d="M7 21h10"
				style={centered}
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.06, 1] }, { duration: 0.7, times: [0, 0.45, 1] }))}
				height="14"
				rx="2"
				style={centered}
				width="20"
				x="2"
				y="3"
			/>
		</>
	),
});
