import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shrimp",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -12, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="M11 12h.01" />
				<motion.g
					{...part(pose({ rotate: [0, 0, 25, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}
					style={pivot(13, 21)}
				>
					<path d="M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1" />
				</motion.g>
				<path d="M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8" />
				<path d="M14 8a8.5 8.5 0 0 1 0 8" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, 0, 30, 0] }, { duration: 0.8, times: [0, 0.35, 0.7, 1] }))}
				style={pivot(16, 16)}
			>
				<path d="M16 16c2 0 4.5-4 4-6" />
			</motion.g>
		</>
	),
});
