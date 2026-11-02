import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const glow = pose(
	{ scale: [1, 1.25, 1], rotate: [0, -10, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "lightbulb",
	render: (part) => (
		<>
			<motion.path
				{...part(glow)}
				d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(redraw(0.1, 0.4))} d="M9 18h6" />
			<motion.path {...part(redraw(0.2, 0.4))} d="M10 22h4" />
		</>
	),
});
