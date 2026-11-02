import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const beat = pose(
	{ scale: [1, 1, 1.3, 1] },
	{ duration: 0.75, times: [0, 0.25, 0.35, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "heart-pulse",
	render: (part) => (
		<motion.g {...part(beat)} style={pivot(12, 12)}>
			<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
			<motion.path {...part(redraw(0, 0.3))} d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
		</motion.g>
	),
});
