import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const pillar = (delay: number) =>
	pose({ y: [0, -4.5, 0] }, { duration: 0.4, delay, times: [0, 0.3, 1], ease: [snap, springy] });

const settle = pose(
	{ y: [0, 0, 3, 0] },
	{ duration: 0.75, times: [0, 0.42, 0.52, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "roller-coaster",
	render: (part) => (
		<motion.g {...part(settle)}>
			<motion.path {...part(pillar(0.08))} d="M6 19V5" />
			<motion.path {...part(pillar(0.15))} d="M10 19V6.8" />
			<motion.path {...part(pillar(0.22))} d="M14 19v-7.8" />
			<motion.path {...part(pillar(0.29))} d="M18 5v4" />
			<motion.path {...part(pillar(0.29))} d="M18 19v-6" />
			<motion.path {...part(pillar(0.36))} d="M22 19V9" />
			<motion.path {...part(redraw(0, 0.55))} d="M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" />
		</motion.g>
	),
});
