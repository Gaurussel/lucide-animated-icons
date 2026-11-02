import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "save-all",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.92, 1, 1] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" />
				<motion.path
					{...part(pose({ y: [0, 0, 2.5, 0, 0] }, { duration: 0.75, times: [0, 0.2, 0.5, 0.8, 1] }))}
					d="M10 2v3a1 1 0 0 0 1 1h5"
				/>
				<motion.path
					{...part(pose({ y: [0, 0, -3, 0, 0] }, { duration: 0.75, times: [0, 0.35, 0.7, 0.9, 1] }))}
					d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"
				/>
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, 0, -1.2, 0], y: [0, 0, 1.2, 0] }, { duration: 0.75, times: [0, 0.5, 0.7, 1] }))}
				d="M18 22H4a2 2 0 0 1-2-2V6"
			/>
		</>
	),
});
