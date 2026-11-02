import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-split-horizontal",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -2, -2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"
			/>
			<motion.path
				{...part(pose({ x: [0, 2, 2, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"
			/>
			<motion.line
				{...part(
					pose(
						{ pathLength: [1, 0.15, 0.15, 1], opacity: [1, 0.4, 0.4, 1] },
						{ duration: 0.7, times: [0, 0.3, 0.6, 1] },
					),
				)}
				x1="12"
				x2="12"
				y1="4"
				y2="20"
			/>
		</>
	),
});
