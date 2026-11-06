import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const pop = (delay: number) =>
	pose({ scale: [1, 1.6, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "file-volume-2",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<motion.path {...part(pop(0.05))} d="M8 15h.01" style={centered} />
			<motion.path {...part(redraw(0.1, 0.35))} d="M11.5 13.5a2.5 2.5 0 0 1 0 3" />
			<motion.path {...part(redraw(0.18, 0.35))} d="M15 12a5 5 0 0 1 0 6" />
		</motion.g>
	),
});
