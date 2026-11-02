import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "trending-up-down",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1, 1.5, 0], y: [0, -1, 1.5, 0] },
						{ duration: 0.7, delay: 0.2, times: [0, 0.25, 0.6, 1] },
					),
				)}
			>
				<path d="M14.828 14.828 21 21" />
				<path d="M21 16v5h-5" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0.55, 1] }, { duration: 0.7, times: [0, 0.2, 0.6, 1] }))}
				d="m21 3-9 9-4-4-6 6"
			/>
			<motion.path
				{...part(pose({ x: [0, -1, 1.5, 0], y: [0, 1, -1.5, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}
				d="M21 8V3h-5"
			/>
		</>
	),
});
