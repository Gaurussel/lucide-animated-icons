import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const twist = pose(
	{ rotate: [0, 0, 360], scale: [1, 0.6, 1] },
	{ duration: 0.65, times: [0, 0.15, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "diff",
	render: (part) => (
		<>
			<motion.g {...part(twist)} style={pivot(12, 10)}>
				<path d="M12 3v14" />
				<path d="M5 10h14" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.4))} d="M5 21h14" />
		</>
	),
});
