import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap } from "../helpers.ts";

const zoom = pose(
	{ scale: [1, 1.18, 1], rotate: [0, -9, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
);

export default createAnimatedIcon({
	name: "search-check",
	render: (part) => (
		<motion.g {...part(zoom)} style={pivot(11, 11)}>
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
			<motion.path {...part(redraw(0.2, 0.4))} d="m8 11 2 2 4-4" />
		</motion.g>
	),
});
