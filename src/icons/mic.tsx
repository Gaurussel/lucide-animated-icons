import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mic",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -8, 6, 0] }, { duration: 0.75, times: [0, 0.3, 0.65, 1] }))}
			style={pivot(12, 22)}
		>
			<path d="M12 19v3" />
			<motion.path
				{...part(pose({ scaleX: [1, 0.9, 0.9, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				d="M19 10v2a7 7 0 0 1-14 0v-2"
				style={edge(0.5, 0)}
			/>
			<motion.rect
				{...part(pose({ scaleY: [1, 1, 0.88, 1] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] }))}
				height="13"
				rx="3"
				style={edge(0.5, 1)}
				width="6"
				x="9"
				y="2"
			/>
		</motion.g>
	),
});
