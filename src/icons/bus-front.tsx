import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bus-front",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.93, 0.93, 1] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			style={centered}
		>
			<motion.path
				{...part(pose({ rotate: [0, 25, 25, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M4 6 2 7"
				style={pivot(4, 6)}
			/>
			<path d="M10 6h4" />
			<motion.path
				{...part(pose({ rotate: [0, -25, -25, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="m22 7-2-1"
				style={pivot(20, 6)}
			/>
			<rect height="16" rx="2" width="16" x="4" y="3" />
			<path d="M4 11h16" />
			<motion.g
				{...part(
					pose({ opacity: [1, 0.1, 1, 0.1, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.4, 0.5, 0.6, 1] }),
				)}
			>
				<path d="M8 15h.01" />
				<path d="M16 15h.01" />
			</motion.g>
			<path d="M6 19v2" />
			<path d="M18 21v-2" />
		</motion.g>
	),
});
