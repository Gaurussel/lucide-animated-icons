import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tags",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.2, 0, 0, 0], y: [0, -1.2, 0, 0, 0] },
						{ duration: 0.8, delay: 0.1, times: [0, 0.25, 0.55, 0.8, 1] },
					),
				)}
				d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"
			/>
			<motion.g
				{...part(pose({ rotate: [0, -14, 9, -3, 0] }, { duration: 0.8, times: [0, 0.25, 0.55, 0.8, 1] }))}
				style={pivot(4, 6)}
			>
				<path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
				<circle cx="6.5" cy="9.5" fill="currentColor" r=".5" />
			</motion.g>
		</>
	),
});
