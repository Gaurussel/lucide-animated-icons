import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "radio-receiver",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -7, 6, -3, 0] }, { duration: 0.9, times: [0, 0.25, 0.45, 0.7, 1] }))}
				style={pivot(12, 18)}
			>
				<motion.path
					{...part(pose({ x: [0, -7, -3, -9, 0] }, { duration: 0.9, times: [0, 0.25, 0.45, 0.7, 1] }))}
					d="M18 12h.01"
				/>
				<path d="M5 16v2" />
				<path d="M19 16v2" />
				<rect height="8" rx="2" width="20" x="2" y="8" />
			</motion.g>
		</>
	),
});
