import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "command",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.86, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
			style={centered}
		>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
				d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
			/>
		</motion.g>
	),
});
