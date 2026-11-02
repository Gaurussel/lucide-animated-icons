import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const insert = pose(
	{ x: [0, -1, 2, 2, 0], y: [0, 1, -2, -2, 0], rotate: [0, 0, 0, 25, 0] },
	{ duration: 0.85, times: [0, 0.2, 0.45, 0.7, 1] },
);

export default createAnimatedIcon({
	name: "key",
	render: (part) => (
		<motion.g {...part(insert)} style={pivot(7.5, 15.5)}>
			<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
			<path d="m21 2-9.6 9.6" />
			<circle cx="7.5" cy="15.5" r="5.5" />
		</motion.g>
	),
});
