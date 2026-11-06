import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const light = (delay: number) =>
	pose({ scale: [1, 1.84, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

const body = pose(
	{ y: [0, -2.4, 0], rotate: [0, -4.8, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "hotel",
	render: (part) => (
		<motion.g {...part(body)} style={pivot(12, 22)}>
			<rect height="20" rx="2" width="16" x="4" y="2" />
			<motion.path {...part(light(0))} d="M8 7h.01" style={centered} />
			<motion.path {...part(light(0.06))} d="M12 7h.01" style={centered} />
			<motion.path {...part(light(0.12))} d="M16 7h.01" style={centered} />
			<motion.path {...part(light(0.18))} d="M8 11h.01" style={centered} />
			<motion.path {...part(light(0.24))} d="M12 11h.01" style={centered} />
			<motion.path {...part(light(0.3))} d="M16 11h.01" style={centered} />
			<motion.path {...part(redraw(0.1, 0.5))} d="M15 16a5 5 0 0 0-6 0" />
			<path d="M10 22v-6.57" />
			<path d="M14 15.43V22" />
		</motion.g>
	),
});
