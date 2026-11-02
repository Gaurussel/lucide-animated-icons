import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const key = (delay: number) =>
	pose({ y: [0, 1.5, 0], scale: [1, 2.2, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

const body = pose({ y: [0, -2, 0], rotate: [0, -10, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "keyboard-off",
	render: (part) => (
		<motion.g {...part(body)} style={pivot(12, 12)}>
			<path d="M 20 4 A2 2 0 0 1 22 6" />
			<path d="M 22 6 L 22 16.41" />
			<path d="M 7 16 L 16 16" />
			<path d="M 9.69 4 L 20 4" />
			<motion.path {...part(key(0))} d="M6 8h.01" style={centered} />
			<motion.path {...part(key(0.06))} d="M8 12h.01" style={centered} />
			<motion.path {...part(key(0.12))} d="M14 8h.01" style={centered} />
			<motion.path {...part(key(0.18))} d="M18 8h.01" style={centered} />
			<motion.path {...part(redraw(0.15, 0.55))} d="m2 2 20 20" />
			<path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
		</motion.g>
	),
});
