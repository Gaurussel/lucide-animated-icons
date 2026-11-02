import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const times = [0, 0.35, 0.65, 1];

export default createAnimatedIcon({
	name: "pocket-knife",
	render: (part) => (
		<motion.g {...part(pose({ rotate: [0, 8, 8, 0] }, { duration: 0.9, times }))} style={pivot(12, 12)}>
			<motion.path
				{...part(pose({ rotate: [0, -80, -80, 0] }, { duration: 0.9, times }))}
				d="M18 11.66V22a4 4 0 0 0 4-4V6"
				style={pivot(20, 6)}
			/>
			<motion.path
				{...part(pose({ scale: [1, 1, 2, 1] }, { duration: 0.9, times: [0, 0.4, 0.7, 1] }))}
				d="M18 6h.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 1, 2, 1] }, { duration: 0.9, times: [0, 0.4, 0.7, 1], delay: 0.1 }))}
				d="M6 18h.01"
				style={centered}
			/>
			<path d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" />
			<path d="M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" />
		</motion.g>
	),
});
