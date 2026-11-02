import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const focus = (x: number, y: number) =>
	pose({ x: [0, 2 * x, 0], y: [0, 2 * y, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const blink = pose({ scale: [1, 0.4, 1] }, { duration: 0.6, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "scan-qr-code",
	render: (part) => (
		<>
			<motion.path {...part(focus(-1, 1))} d="M17 3h2a2 2 0 0 1 2 2v2" />
			<motion.path {...part(focus(-1, -1))} d="M21 17v2a2 2 0 0 1-2 2h-2" />
			<motion.path {...part(focus(1, 1))} d="M3 7V5a2 2 0 0 1 2-2h2" />
			<motion.path {...part(focus(1, -1))} d="M7 21H5a2 2 0 0 1-2-2v-2" />
			<motion.path {...part(redraw(0.15, 0.45))} d="M17 12v4a1 1 0 0 1-1 1h-4" />
			<path d="M17 8V7" />
			<path d="M7 17h.01" />
			<motion.rect {...part(blink)} height="5" rx="1" style={centered} width="5" x="7" y="7" />
		</>
	),
});
