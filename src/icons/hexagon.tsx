import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const turn = pose({ rotate: [0, -14, 360], scale: [1, 0.9, 1] }, { duration: 0.8, times: [0, 0.25, 1], reset: true });

export default createAnimatedIcon({
	name: "hexagon",
	render: (part) => (
		<motion.path
			{...part(turn)}
			d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
			style={pivot(12, 12)}
		/>
	),
});
