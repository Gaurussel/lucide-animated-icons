import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const receive = pose(
	{ scale: [1, 0.94, 0.94, 1.07, 1] },
	{ duration: 0.75, times: [0, 0.15, 0.35, 0.45, 1], ease: [snap, "easeInOut", snap, springy] },
);
const flick = pose(
	{ rotate: [0, 0, -9.6, 0], y: [0, 0, -0.9, 0] },
	{ duration: 0.75, times: [0, 0.35, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "circle-check",
	render: (part) => (
		<>
			<motion.circle {...part(receive)} cx="12" cy="12" r="10" style={centered} />
			<motion.g {...part(flick)} style={pivot(11, 14)}>
				<motion.path {...part(redraw(0, 0.35))} d="m9 12 2 2 4-4" />
			</motion.g>
		</>
	),
});
