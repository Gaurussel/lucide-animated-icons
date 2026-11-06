import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const droop = pose(
	{ rotate: [0, -6, 13.2, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "flag-off",
	render: (part) => (
		<>
			<path d="M4 22V4" />
			<motion.g {...part(droop)} style={pivot(4, 3)}>
				<path d="M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
				<path d="M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.25))} d="m2 2 20 20" />
		</>
	),
});
