import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const flap = pose(
	{ rotate: [0, 0, -10, 0] },
	{ duration: 0.75, times: [0, 0.42, 0.52, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "flag",
	render: (part) => (
		<motion.g {...part(flap)} style={pivot(4, 22)}>
			<motion.path
				{...part(redraw(0, 0.45))}
				d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"
			/>
		</motion.g>
	),
});
