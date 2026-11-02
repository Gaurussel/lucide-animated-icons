import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const times = [0, 0.3, 0.65, 1];

export default createAnimatedIcon({
	name: "trash",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.94, 1] }, { duration: 0.75, times }))}
				d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
				style={edge(0.5, 1)}
			/>
			<motion.g
				{...part(pose({ y: [0, -1.5, -1.5, 0], rotate: [0, -14, -14, 0] }, { duration: 0.75, times }))}
				style={pivot(3, 6)}
			>
				<path d="M3 6h18" />
				<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
			</motion.g>
		</>
	),
});
