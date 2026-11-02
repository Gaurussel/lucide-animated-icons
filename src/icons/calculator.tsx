import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "calculator",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -6, -6, 0] }, { duration: 0.9, times: [0, 0.3, 0.7, 1] }))}
			style={pivot(12, 22)}
		>
			<rect height="20" rx="2" width="16" x="4" y="2" />
			<motion.line
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.4, times: [0, 0.4, 1] }))}
				x1="8"
				x2="16"
				y1="6"
				y2="6"
			/>
			<motion.line
				{...part(
					pose({ opacity: [1, 0.15, 1], y: [0, 1.5, 0] }, { duration: 0.3, delay: 0.3, times: [0, 0.5, 1] }),
				)}
				x1="16"
				x2="16"
				y1="14"
				y2="18"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 0.15, 1], y: [0, 1.5, 0] }, { duration: 0.3, delay: 0.12, times: [0, 0.5, 1] }),
				)}
				d="M16 10h.01"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 0.15, 1], y: [0, 1.5, 0] }, { duration: 0.3, delay: 0.06, times: [0, 0.5, 1] }),
				)}
				d="M12 10h.01"
			/>
			<motion.path
				{...part(pose({ opacity: [1, 0.15, 1], y: [0, 1.5, 0] }, { duration: 0.3, times: [0, 0.5, 1] }))}
				d="M8 10h.01"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 0.15, 1], y: [0, 1.5, 0] }, { duration: 0.3, delay: 0.24, times: [0, 0.5, 1] }),
				)}
				d="M12 14h.01"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 0.15, 1], y: [0, 1.5, 0] }, { duration: 0.3, delay: 0.18, times: [0, 0.5, 1] }),
				)}
				d="M8 14h.01"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 0.15, 1], y: [0, 1.5, 0] }, { duration: 0.3, delay: 0.42, times: [0, 0.5, 1] }),
				)}
				d="M12 18h.01"
			/>
			<motion.path
				{...part(
					pose({ opacity: [1, 0.15, 1], y: [0, 1.5, 0] }, { duration: 0.3, delay: 0.36, times: [0, 0.5, 1] }),
				)}
				d="M8 18h.01"
			/>
		</motion.g>
	),
});
