import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tent",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 0.78, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M3.5 21 14 3" />
				<path d="M20.5 21 10 3" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 1, 0.1, 1] }, { duration: 0.75, times: [0, 0.3, 0.65, 1] }))}
				d="M15.5 21 12 15l-3.5 6"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.85, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 1] }))}
				d="M2 21h20"
				style={centered}
			/>
		</>
	),
});
