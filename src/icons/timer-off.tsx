import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "timer-off",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] }))}
				d="M10 2h4"
			/>
			<motion.g {...part(pose({ x: [0, 0, -0.8, 0.8, 0] }, { duration: 0.8, times: [0, 0.4, 0.55, 0.7, 1] }))}>
				<path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" />
				<path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] }))}
				d="m2 2 20 20"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.3, 1] }, { duration: 0.8, times: [0, 0.4, 0.55, 1] }))}
				d="M12 12v-2"
				style={centered}
			/>
		</>
	),
});
