import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const zoom = pose(
	{ scale: [1, 1.18, 1], rotate: [0, -9, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] },
);
const strike = pose({ scale: [1, 0.89, 1] }, { duration: 0.7, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "search-x",
	render: (part) => (
		<motion.g {...part(zoom)} style={pivot(11, 11)}>
			<circle cx="11" cy="11" r="8" />
			<path d="m21 21-4.3-4.3" />
			<motion.g {...part(strike)} style={pivot(11, 11)}>
				<motion.path {...part(redraw(0.05, 0.35))} d="m13.5 8.5-5 5" />
				<motion.path {...part(redraw(0.22, 0.35))} d="m8.5 8.5 5 5" />
			</motion.g>
		</motion.g>
	),
});
