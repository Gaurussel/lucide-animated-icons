import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "test-tube-diagonal",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -10, -10, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(5, 19)}
		>
			<path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
			<path d="m16 2 6 6" />
			<motion.path
				{...part(pose({ x: [0, 2, 2, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				d="M12 16H4"
			/>
		</motion.g>
	),
});
