import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const unroll = pose(
	{ rotate: [0, -7.2, 0], y: [0, -1.8, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "scroll",
	render: (part) => (
		<motion.g {...part(unroll)} style={pivot(12, 21)}>
			<motion.path {...part(redraw(0.05, 0.55))} d="M19 17V5a2 2 0 0 0-2-2H4" />
			<path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" />
		</motion.g>
	),
});
