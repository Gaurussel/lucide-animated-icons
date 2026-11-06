import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const bob = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "heading-4",
	render: (part) => (
		<>
			<motion.g {...part(bob)} style={pivot(4, 18)}>
				<path d="M4 12h8" />
				<path d="M4 18V6" />
				<path d="M12 18V6" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.4))} d="M17 10v3a1 1 0 0 0 1 1h3" />
			<motion.path {...part(redraw(0.22, 0.4))} d="M21 10v8" />
		</>
	),
});
