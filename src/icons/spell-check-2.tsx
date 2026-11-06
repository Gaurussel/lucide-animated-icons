import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const grow = pose(
	{ scale: [1, 1, 1.15, 1] },
	{ duration: 0.68, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const squiggle = pose({ x: [0, -1.2, 0] }, { duration: 0.68, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "spell-check-2",
	render: (part) => (
		<>
			<motion.g {...part(grow)} style={edge(0.5, 1)}>
				<path d="m6 16 6-12 6 12" />
				<path d="M8 12h8" />
			</motion.g>
			<motion.g {...part(squiggle)}>
				<motion.path
					{...part(redraw(0.1, 0.55))}
					d="M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
				/>
			</motion.g>
		</>
	),
});
