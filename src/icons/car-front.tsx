import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "car-front",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.86, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
			style={centered}
		>
			<motion.path
				{...part(pose({ y: [0, 0, -1, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
			/>
			<motion.g
				{...part(pose({ opacity: [1, 0.2, 1, 0.2, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 0.75, 1] }))}
			>
				<path d="M7 14h.01" />
				<path d="M17 14h.01" />
			</motion.g>
			<rect height="8" rx="2" width="18" x="3" y="10" />
			<path d="M5 18v2" />
			<path d="M19 18v2" />
		</motion.g>
	),
});
