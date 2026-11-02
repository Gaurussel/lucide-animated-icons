import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "theater",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -8, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(6, 22)}
			>
				<path d="M2 10s3-3 3-8" />
				<path d="M10 2c0 4.4-3.6 8-8 8" />
				<path d="M2 10s2 2 2 5" />
				<path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, 8, 0, 0] }, { duration: 0.8, delay: 0.15, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(18, 22)}
			>
				<path d="M22 10s-3-3-3-8" />
				<path d="M14 2c0 4.4 3.6 8 8 8" />
				<path d="M22 10s-2 2-2 5" />
				<path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 0.7, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M8 15h8"
				style={centered}
			/>
		</>
	),
});
