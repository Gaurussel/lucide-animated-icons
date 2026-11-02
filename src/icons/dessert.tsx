import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dessert",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleY: [1, 1, 0.86, 1] }, { duration: 0.8, times: [0, 0.55, 0.75, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826" />
				<path d="M20.804 14.869a9 9 0 0 1-17.608 0" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -4, -4, 0] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}>
				<circle cx="12" cy="4" r="2" />
			</motion.g>
		</>
	),
});
