import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const seat = pose({ y: [0, -4, 0], rotate: [0, -8, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "microchip",
	render: (part) => (
		<motion.g {...part(seat)} style={centered}>
			<path d="M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z" />
			<motion.path {...part(redraw(0.08, 0.3))} d="M4 4h2" />
			<motion.path {...part(redraw(0.08, 0.3))} d="M18 4h2" />
			<motion.path {...part(redraw(0.13, 0.3))} d="M4 8h2" />
			<motion.path {...part(redraw(0.13, 0.3))} d="M18 8h2" />
			<motion.path {...part(redraw(0.18, 0.3))} d="M4 12h2" />
			<motion.path {...part(redraw(0.18, 0.3))} d="M18 12h2" />
			<motion.path {...part(redraw(0.23, 0.3))} d="M4 16h2" />
			<motion.path {...part(redraw(0.23, 0.3))} d="M18 16h2" />
			<motion.path {...part(redraw(0.28, 0.3))} d="M4 20h2" />
			<motion.path {...part(redraw(0.28, 0.3))} d="M18 20h2" />
		</motion.g>
	),
});
