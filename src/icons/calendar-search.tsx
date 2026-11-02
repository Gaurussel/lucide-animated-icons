import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "calendar-search",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -8, -8, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(12, 22)}
		>
			<motion.path
				{...part(pose({ y: [0, -3, 0] }, { duration: 0.4, delay: 0.08, times: [0, 0.45, 1] }))}
				d="M16 2v4"
			/>
			<path d="M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" />
			<motion.g
				{...part(pose({ x: [0, -2, -2, 0], y: [0, 0, -2, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			>
				<path d="m22 22-1.875-1.875" />
				<circle cx="18" cy="18" r="3" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.15, times: [0, 0.35, 1] }))}
				d="M3 10h18"
			/>
			<motion.path {...part(pose({ y: [0, -3, 0] }, { duration: 0.4, times: [0, 0.45, 1] }))} d="M8 2v4" />
		</motion.g>
	),
});
