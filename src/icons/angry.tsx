import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "angry",
	render: (part) => (
		<motion.g
			{...part(pose({ x: [0, -0.8, 0.8, -0.8, 0.8, 0] }, { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }))}
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M9 10h.01" />
			<path d="M15 10h.01" />
			<motion.g {...part(pose({ y: [0, 1, 1, 0] }, { duration: 0.7, times: [0, 0.25, 0.7, 1] }))}>
				<path d="M7.5 8 10 9" />
				<path d="m14 9 2.5-1" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleY: [1, 0.6, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				d="M16 16s-1.5-2-4-2-4 2-4 2"
				style={centered}
			/>
		</motion.g>
	),
});
