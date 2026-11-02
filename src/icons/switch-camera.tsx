import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "switch-camera",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
				<path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
			</motion.g>
			<motion.circle
				{...part(pose({ scaleX: [1, 1, 0.1, 1] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] }))}
				cx="12"
				cy="12"
				r="3"
				style={centered}
			/>
			<motion.path
				{...part(pose({ x: [0, -3.5, 0, 0] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}
				d="m18 22-3-3 3-3"
			/>
			<motion.path
				{...part(pose({ x: [0, 3.5, 0, 0] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}
				d="m6 2 3 3-3 3"
			/>
		</>
	),
});
