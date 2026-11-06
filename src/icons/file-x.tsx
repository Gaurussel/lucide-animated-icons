import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const strike = pose(
	{ scale: [1, 0.89, 1] },
	{ duration: 0.65, delay: 0.05, times: [0, 0.14, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "file-x",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<motion.g {...part(strike)} style={pivot(12, 15)}>
				<motion.path {...part(redraw(0.1, 0.35))} d="m14.5 12.5-5 5" />
				<motion.path {...part(redraw(0.27, 0.35))} d="m9.5 12.5 5 5" />
			</motion.g>
		</motion.g>
	),
});
