import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "caravan",
	render: (part) => (
		<motion.g {...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
			<motion.path
				{...part(pose({ y: [0, 0, -0.7, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"
			/>
			<path d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" />
			<path d="M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" />
			<motion.circle
				{...part(pose({ y: [0, 0, 0.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				cx="8"
				cy="19"
				r="2"
			/>
		</motion.g>
	),
});
