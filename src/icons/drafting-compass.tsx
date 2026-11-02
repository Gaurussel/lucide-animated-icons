import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "drafting-compass",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 6, 6, 0] }, { duration: 0.85, times: [0, 0.25, 0.7, 1] }))}
				style={pivot(12, 5)}
			>
				<path d="m12.99 6.74 1.93 3.44" />
				<path d="m21 21-2.16-3.84" />
			</motion.g>
			<motion.g {...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.85, times: [0, 0.2, 0.35, 0.85] }))}>
				<path d="M19.136 12a10 10 0 0 1-14.271 0" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, -6, -6, 0] }, { duration: 0.85, times: [0, 0.25, 0.7, 1] }))}
				style={pivot(12, 5)}
			>
				<path d="m3 21 8.02-14.26" />
			</motion.g>
			<circle cx="12" cy="5" r="2" />
		</>
	),
});
