import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bluetooth-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -8, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={centered}
			>
				<path d="m17 17-5 5V12l-5 5" />
				<path d="M14.5 9.5 17 7l-5-5v4.5" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
