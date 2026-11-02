import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const flick = pose(
	{ rotate: [0, 0, -14, 0], x: [0, 0, 1.5, 0], y: [0, 0, -1.5, 0] },
	{ duration: 0.75, times: [0, 0.35, 0.45, 1], ease: ["easeInOut", snap, springy] },
);
const spun = pose(
	{ rotate: [0, 0, -50, 0] },
	{ duration: 0.75, times: [0, 0.38, 0.5, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "circle-check-big",
	render: (part) => (
		<>
			<motion.path {...part(spun)} d="M21.801 10A10 10 0 1 1 17 3.335" style={pivot(12, 12)} />
			<motion.g {...part(flick)} style={pivot(12, 14)}>
				<motion.path {...part(redraw(0, 0.4))} d="m9 11 3 3L22 4" />
			</motion.g>
		</>
	),
});
