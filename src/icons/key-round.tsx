import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const insert = pose(
	{ x: [0, 1, -2, -2, 0], y: [0, -1, 2, 2, 0], rotate: [0, 0, 0, 25, 0] },
	{ duration: 0.85, times: [0, 0.2, 0.45, 0.7, 1] },
);

export default createAnimatedIcon({
	name: "key-round",
	render: (part) => (
		<motion.g {...part(insert)} style={pivot(16.5, 7.5)}>
			<path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
			<circle cx="16.5" cy="7.5" fill="currentColor" r=".5" />
		</motion.g>
	),
});
