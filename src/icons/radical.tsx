import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const board = pose(
	{ rotate: [0, 0, 10, 0] },
	{ duration: 0.75, times: [0, 0.5, 0.58, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "radical",
	render: (part) => (
		<motion.g {...part(board)} style={pivot(14, 4)}>
			<motion.path
				{...part(redraw(0, 0.5))}
				d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"
			/>
		</motion.g>
	),
});
