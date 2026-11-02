import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "refrigerator",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.86, 0.86, 1] }, { duration: 0.8, times: [0, 0.4, 0.7, 1] }))}
				style={edge(0, 0.5)}
			>
				<path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" />
				<path d="M5 10h14" />
				<motion.path
					{...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.8, times: [0, 0.12, 0.3, 1] }))}
					d="M15 7v6"
				/>
			</motion.g>
		</>
	),
});
