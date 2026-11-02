import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clock-alert",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -14, 360] }, { duration: 0.85, times: [0, 0.2, 1], reset: true }))}
				d="M12 6v6l4 2"
				style={pivot(12, 12)}
			/>
			<motion.g
				{...part(pose({ opacity: [1, 0.15, 1, 0.15, 1] }, { duration: 0.85, times: [0, 0.35, 0.5, 0.75, 1] }))}
			>
				<path d="M20 12v5" />
				<path d="M20 21h.01" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 0.92, 1, 0.96, 1] }, { duration: 0.85, times: [0, 0.2, 0.5, 0.85, 1] }))}
				d="M21.25 8.2A10 10 0 1 0 16 21.16"
				style={pivot(12, 12)}
			/>
		</>
	),
});
