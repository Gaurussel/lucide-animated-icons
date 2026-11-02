import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const node = (delay: number) =>
	pose({ scale: [1, 1.8, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const tilt = pose(
	{ rotate: [0, -10, 0], y: [0, -2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "circuit-board",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 21)}>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(redraw(0.15, 0.45))} d="M11 9h4a2 2 0 0 0 2-2V3" />
			<motion.circle {...part(node(0))} cx="9" cy="9" r="2" style={centered} />
			<motion.path {...part(redraw(0.25, 0.45))} d="M7 21v-4a2 2 0 0 1 2-2h4" />
			<motion.circle {...part(node(0.1))} cx="15" cy="15" r="2" style={centered} />
		</motion.g>
	),
});
