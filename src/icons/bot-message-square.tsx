import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bot-message-square",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -7, 7, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}
			style={pivot(12, 20)}
		>
			<motion.path
				{...part(pose({ y: [0, -2.5, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] }))}
				d="M12 6V2H8"
			/>
			<path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
			<motion.path
				{...part(pose({ x: [0, 0, -2.5, 0] }, { duration: 0.8, times: [0, 0.6, 0.8, 1] }))}
				d="M2 12h2"
			/>
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.1, 1, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 0.65, 1] }))}
				style={centered}
			>
				<path d="M9 11v2" />
				<path d="M15 11v2" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, 0, 2.5, 0] }, { duration: 0.8, times: [0, 0.6, 0.8, 1] }))}
				d="M20 12h2"
			/>
		</motion.g>
	),
});
