import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flashlight",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -10, 10, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			style={pivot(12, 22)}
		>
			<path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z" />
			<motion.line
				{...part(pose({ opacity: [1, 0.3, 1, 0.3, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.7, 1] }))}
				x1="6"
				x2="18"
				y1="6"
				y2="6"
			/>
			<motion.line
				{...part(pose({ y: [0, 1.5, 0], scale: [1, 1.6, 1] }, { duration: 0.8, times: [0, 0.25, 0.5] }))}
				style={centered}
				x1="12"
				x2="12"
				y1="12"
				y2="12"
			/>
		</motion.g>
	),
});
