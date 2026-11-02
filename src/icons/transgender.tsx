import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "transgender",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 2, 0] }, { duration: 0.5, delay: 0.3, times: [0, 0.5, 1] }))}>
				<path d="M12 16v6" />
				<path d="M14 20h-4" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, 2.2, 0], y: [0, -2.2, 0] }, { duration: 0.5, delay: 0.2, times: [0, 0.5, 1] }))}
			>
				<path d="M18 2h4v4" />
				<path d="m22 2-7.17 7.17" />
			</motion.g>
			<motion.g
				{...part(pose({ x: [0, -2.2, 0], y: [0, -2.2, 0] }, { duration: 0.5, delay: 0.1, times: [0, 0.5, 1] }))}
			>
				<path d="m2 2 7.17 7.17" />
				<path d="M2 5.355V2h3.357" />
				<path d="M8 5 5 8" />
			</motion.g>
			<motion.circle
				{...part(pose({ scale: [1, 0.7, 1] }, { duration: 0.5, times: [0, 0.5, 1] }))}
				cx="12"
				cy="12"
				r="4"
				style={centered}
			/>
		</>
	),
});
