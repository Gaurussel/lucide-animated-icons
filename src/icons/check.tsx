import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const flick = pose(
	{ y: [0, 2, -2, 0], rotate: [0, 6, -14, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.42, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "check",
	render: (part) => (
		<motion.g {...part(flick)} style={pivot(9, 17)}>
			<motion.path {...part(redraw(0, 0.4))} d="M20 6 9 17l-5-5" />
		</motion.g>
	),
});
