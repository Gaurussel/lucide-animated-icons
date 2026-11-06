import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const rise = pose(
	{ y: [0, -2.4, 0], rotate: [0, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "mountain-snow",
	render: (part) => (
		<motion.g {...part(rise)} style={edge(0.5, 1)}>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
			<motion.path
				{...part(redraw(0.1, 0.5))}
				d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"
			/>
		</motion.g>
	),
});
