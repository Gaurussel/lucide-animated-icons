import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const swing = pose({ rotate: [0, -30, 0] }, { duration: 0.75, times: [0, 0.1, 1], ease: [snap, ring] });
const clapper = pose({ x: [0, -3, 0] }, { duration: 0.75, times: [0, 0.14, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "bell-off",
	render: (part) => (
		<>
			<motion.g {...part(swing)} style={pivot(12, 2)}>
				<motion.path {...part(clapper)} d="M10.268 21a2 2 0 0 0 3.464 0" />
				<path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" />
				<path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.45))} d="m2 2 20 20" />
		</>
	),
});
