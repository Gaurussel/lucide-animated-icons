import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "check",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.85, 0.85, 1] }, { duration: 0.55, times: [0, 0.3, 0.6, 1] }))}
			style={centered}
		>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.55, times: [0, 0.35, 1] }))}
				d="M20 6 9 17l-5-5"
			/>
		</motion.g>
	),
});
