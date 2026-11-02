import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "diamond",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.35, 1], scaleY: [1, 1.04, 1] }, { duration: 0.65, times: [0, 0.5, 1] }))}
				style={centered}
			>
				<path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
			</motion.g>
		</>
	),
});
