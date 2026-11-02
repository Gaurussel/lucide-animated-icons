import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap } from "../helpers.ts";

const zoom = pose(
	{ scale: [1, 1.3, 1], rotate: [0, -15, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
);
const bracket = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "search-code",
	render: (part) => (
		<motion.g {...part(zoom)} style={pivot(11, 11)}>
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
			<motion.path {...part(bracket(1.5))} d="m13 13.5 2-2.5-2-2.5" />
			<motion.path {...part(bracket(-1.5))} d="M9 8.5 7 11l2 2.5" />
		</motion.g>
	),
});
