import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "rows-2",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path
				{...part(pose({ y: [0, -3, 3, 0] }, { duration: 0.8, times: [0, 0.25, 0.65, 1] }))}
				d="M3 12h18"
			/>
		</>
	),
});
