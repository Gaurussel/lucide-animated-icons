import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "calendar-range",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -8, -8, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(12, 22)}
		>
			<rect height="18" rx="2" width="18" x="3" y="4" />
			<motion.path
				{...part(pose({ y: [0, -3, 0] }, { duration: 0.4, delay: 0.08, times: [0, 0.45, 1] }))}
				d="M16 2v4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.15, times: [0, 0.35, 1] }))}
				d="M3 10h18"
			/>
			<motion.path {...part(pose({ y: [0, -3, 0] }, { duration: 0.4, times: [0, 0.45, 1] }))} d="M8 2v4" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.2, times: [0, 0.2, 0.45, 1] }))}
				d="M17 14h-6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.3, times: [0, 0.2, 0.45, 1] }))}
				d="M13 18H7"
			/>
			<motion.g
				{...part(pose({ opacity: [1, 0, 1, 1] }, { duration: 0.75, delay: 0.2, times: [0, 0.3, 0.7, 1] }))}
			>
				<path d="M7 14h.01" />
				<path d="M17 18h.01" />
			</motion.g>
		</motion.g>
	),
});
