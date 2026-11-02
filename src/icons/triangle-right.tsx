import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const ramp = pose(
	{ x: [0, -1, 2, 0], rotate: [0, 5, -14, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.34, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "triangle-right",
	render: (part) => (
		<motion.g {...part(ramp)} style={pivot(2, 20)}>
			<motion.path
				{...part(redraw(0.08, 0.6))}
				d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"
			/>
		</motion.g>
	),
});
