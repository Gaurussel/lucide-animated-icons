import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, springy } from "../helpers.ts";

const sweep = pose(
	{ rotate: [0, 3.6, -10.8, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeIn", springy] },
);
const bristles = pose(
	{ rotate: [0, -4.8, 12, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.48, 1], ease: ["easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "paintbrush-vertical",
	render: (part) => (
		<motion.g {...part(sweep)} style={pivot(12, 21)}>
			<motion.g {...part(bristles)} style={pivot(12, 12)}>
				<path d="M10 2v2" />
				<path d="M14 2v4" />
				<path d="M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" />
			</motion.g>
			<path d="M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" />
		</motion.g>
	),
});
