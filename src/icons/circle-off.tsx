import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const roll = pose(
	{ rotate: [0, -40, 360], scale: [1, 0.8, 1] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "circle-off",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.1, 0.45))} d="m2 2 20 20" />
			<motion.g {...part(roll)} style={pivot(12, 12)}>
				<path d="M8.35 2.69A10 10 0 0 1 21.3 15.65" />
				<path d="M19.08 19.08A10 10 0 1 1 4.92 4.92" />
			</motion.g>
		</>
	),
});
