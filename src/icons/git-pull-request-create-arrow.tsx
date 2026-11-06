import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const jab = pose(
	{ x: [0, 1.2, -1.8, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const twist = pose(
	{ scale: [1, 0.7, 1], rotate: [0, 0, 0] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "git-pull-request-create-arrow",
	render: (part) => (
		<>
			<circle cx="5" cy="6" r="3" />
			<path d="M5 9v12" />
			<motion.path {...part(jab)} d="m15 9-3-3 3-3" />
			<motion.path {...part(redraw(0.05, 0.45))} d="M12 6h5a2 2 0 0 1 2 2v3" />
			<motion.g {...part(twist)} style={pivot(19, 18)}>
				<path d="M19 15v6" />
				<path d="M22 18h-6" />
			</motion.g>
		</>
	),
});
