import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "vegan",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.25, 1] }, { duration: 0.45, delay: 0.35, times: [0, 0.5, 1] }))}
				d="M16 8q6 0 6-6-6 0-6 6"
				style={edge(0, 1)}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.4, 1] }, { duration: 0.5, delay: 0.1, times: [0, 0.5, 1] }))}
				d="M17.41 3.59a10 10 0 1 0 3 3"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0.2, 1] }, { duration: 0.45, times: [0, 0.5, 1] }))}
				d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"
			/>
		</>
	),
});
