import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-dot-dashed",
	render: (part) => (
		<>
			<motion.g {...part(pose({ rotate: 360 }, { duration: 0.8, reset: true }))} style={pivot(12, 12)}>
				<path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
				<path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
				<path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
				<path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
				<path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
				<path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
				<path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
				<path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 0.3, 1.4, 1] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}
				cx="12"
				cy="12"
				r="1"
				style={centered}
			/>
		</>
	),
});
