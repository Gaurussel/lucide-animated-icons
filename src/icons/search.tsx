import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap } from "../helpers.ts";

const zoom = pose(
	{ scale: [1, 1.3, 1], rotate: [0, -15, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
);

export default createAnimatedIcon({
	name: "search",
	render: (part) => (
		<motion.g {...part(zoom)} style={pivot(11, 11)}>
			<path d="m21 21-4.34-4.34" />
			<circle cx="11" cy="11" r="8" />
		</motion.g>
	),
});
