import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "trending-up",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ x: [0, -1, 1.5, 0], y: [0, 0.5, -0.8, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }),
				)}
				d="M16 7h6v6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0.55, 1] }, { duration: 0.7, times: [0, 0.2, 0.6, 1] }))}
				d="m22 7-8.5 8.5-5-5L2 17"
			/>
		</>
	),
});
