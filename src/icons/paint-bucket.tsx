import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "paint-bucket",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -12, -12, 0] }, { duration: 0.8, times: [0, 0.35, 0.7, 1] }))}
				style={pivot(11, 19)}
			>
				<path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
				<path d="m5 2 5 5" />
				<path d="M2 13h15" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ y: [0, 0, 4, -4, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.8, times: [0, 0.35, 0.7, 0.71, 1] },
					),
				)}
				d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"
			/>
		</>
	),
});
