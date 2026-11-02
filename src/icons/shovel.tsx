import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shovel",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ x: [0, 1.5, -2.5, 0], y: [0, -1.5, 2.5, 0] }, { duration: 0.8, times: [0, 0.25, 0.65, 1] }),
				)}
			>
				<path d="M2 22v-5l5-5 5 5-5 5z" />
				<path d="M9.5 14.5 16 8" />
				<motion.g
					{...part(pose({ rotate: [0, 0, 6, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
					style={pivot(17, 7)}
				>
					<path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2" />
				</motion.g>
			</motion.g>
		</>
	),
});
