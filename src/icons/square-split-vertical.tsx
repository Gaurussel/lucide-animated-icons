import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-split-vertical",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"
			/>
			<motion.path
				{...part(pose({ y: [0, 2, 2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"
			/>
			<motion.line
				{...part(
					pose(
						{ pathLength: [1, 0.15, 0.15, 1], opacity: [1, 0.4, 0.4, 1] },
						{ duration: 0.7, times: [0, 0.3, 0.6, 1] },
					),
				)}
				x1="4"
				x2="20"
				y1="12"
				y2="12"
			/>
		</>
	),
});
