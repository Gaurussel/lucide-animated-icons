import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "clock-plus",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -14, 360] }, { duration: 0.85, times: [0, 0.2, 1], reset: true }))}
				d="M12 6v6l3.644 1.822"
				style={pivot(12, 12)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
				d="M16 19h6"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.3, 0.5, 1] }))}
				d="M19 16v6"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.92, 1, 0.96, 1] }, { duration: 0.85, times: [0, 0.2, 0.5, 0.85, 1] }))}
				d="M21.92 13.267a10 10 0 1 0-8.653 8.653"
				style={pivot(12, 12)}
			/>
		</>
	),
});
