import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-bottom-dashed-scissors",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] }))}
				style={centered}
			>
				<path d="M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2" />
				<path d="M10 22H8" />
				<path d="M16 22h-2" />
			</motion.g>
			<motion.circle
				{...part(pose({ y: [0, 1.5, 0, 1.5, 0] }, { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 1] }))}
				cx="8"
				cy="8"
				r="2"
			/>
			<path d="M9.414 9.414 12 12" />
			<path d="M14.8 14.8 18 18" />
			<motion.circle
				{...part(pose({ y: [0, -1.5, 0, -1.5, 0] }, { duration: 0.7, times: [0, 0.2, 0.4, 0.6, 1] }))}
				cx="8"
				cy="16"
				r="2"
			/>
			<path d="m18 6-8.586 8.586" />
		</>
	),
});
