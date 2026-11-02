import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const play = (delay: number) =>
	pose({ y: [0, 2.5, 0] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

const body = pose({ y: [0, -2, 0], rotate: [0, -10, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "keyboard-music",
	render: (part) => (
		<motion.g {...part(body)} style={pivot(12, 12)}>
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<path d="M6 8h4" />
			<path d="M14 8h.01" />
			<path d="M18 8h.01" />
			<path d="M2 12h20" />
			<motion.path {...part(play(0))} d="M6 12v4" />
			<motion.path {...part(play(0.08))} d="M10 12v4" />
			<motion.path {...part(play(0.16))} d="M14 12v4" />
			<motion.path {...part(play(0.24))} d="M18 12v4" />
		</motion.g>
	),
});
