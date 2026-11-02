import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-badge-2",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<motion.path
				{...part(pose({ rotate: [0, 0, -8, 6, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 0.75, 1] }))}
				d="m13.69 12.479 1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88"
				style={pivot(12, 13)}
			/>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
			<motion.circle
				{...part(pose({ scale: [1, 1, 1.2, 1.2, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.7, 1] }))}
				cx="12"
				cy="10"
				r="3"
				style={centered}
			/>
		</motion.g>
	),
});
