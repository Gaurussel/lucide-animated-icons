import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pound-sterling",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.1, 1, 1] }, { duration: 0.8, times: [0, 0.4, 0.7, 1] }))}
				style={centered}
			>
				<motion.path
					{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.5, 0.65, 1] }))}
					d="M6 13h10"
				/>
				<path d="M18 7c0-5.333-8-5.333-8 0" />
				<path d="M10 7v14" />
				<path d="M6 21h12" />
			</motion.g>
		</>
	),
});
