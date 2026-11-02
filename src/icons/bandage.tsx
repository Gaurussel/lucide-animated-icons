import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const apply = pose({ rotate: [0, -30, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });
const dot = (delay: number) =>
	pose({ y: [0, -2, 0] }, { duration: 0.4, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "bandage",
	render: (part) => (
		<motion.g {...part(apply)} style={pivot(12, 12)}>
			<motion.path {...part(dot(0.2))} d="M10 10.01h.01" />
			<motion.path {...part(dot(0.26))} d="M14 10.01h.01" />
			<motion.path {...part(dot(0.32))} d="M10 14.01h.01" />
			<motion.path {...part(dot(0.38))} d="M14 14.01h.01" />
			<motion.path {...part(redraw(0.25, 0.35))} d="M18 6v11.5" />
			<motion.path {...part(redraw(0.25, 0.35))} d="M6 6v12" />
			<rect height="12" rx="2" width="20" x="2" y="6" />
		</motion.g>
	),
});
