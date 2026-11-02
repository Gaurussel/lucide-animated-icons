import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "table-cells-merge",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				d="M12 21v-6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				d="M12 9V3"
			/>
			<motion.path
				{...part(pose({ y: [0, -1.5, -1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				d="M3 15h18"
			/>
			<motion.path
				{...part(pose({ y: [0, 1.5, 1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				d="M3 9h18"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 1, 0.88, 1] }, { duration: 0.7, times: [0, 0.3, 0.55, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
		</>
	),
});
