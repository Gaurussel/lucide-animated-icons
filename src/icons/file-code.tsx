import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 0, -5, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const push = (x: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.65, delay: 0.05, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "file-code",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
			<motion.path {...part(push(-2.5))} d="M10 12.5 8 15l2 2.5" />
			<motion.path {...part(push(2.5))} d="m14 12.5 2 2.5-2 2.5" />
		</motion.g>
	),
});
