import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap } from "../helpers.ts";

const zoom = pose(
	{ scale: [1, 0.75, 1], rotate: [0, 15, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
);

export default createAnimatedIcon({
	name: "zoom-out",
	render: (part) => (
		<motion.g {...part(zoom)} style={pivot(11, 11)}>
			<circle cx="11" cy="11" r="8" />
			<line x1="21" x2="16.65" y1="21" y2="16.65" />
			<motion.line {...part(redraw(0.1, 0.5))} x1="8" x2="14" y1="11" y2="11" />
		</motion.g>
	),
});
