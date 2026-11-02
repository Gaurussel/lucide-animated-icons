import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const wave = (delay: number) =>
	pose({ x: [0, -5, 0] }, { duration: 0.65, delay, times: [0, 0.3, 1], ease: [snap, springy] });

const brace = pose(
	{ rotate: [0, -8, 0] },
	{ duration: 0.7, delay: 0.12, times: [0, 0.15, 1], ease: ["easeInOut", ring] },
);

export default createAnimatedIcon({
	name: "dam",
	render: (part) => (
		<>
			<motion.path
				{...part(brace)}
				d="M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"
				style={pivot(9, 21)}
			/>
			<motion.path
				{...part(wave(0))}
				d="M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			/>
			<motion.path {...part(wave(0.08))} d="M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
			<motion.path {...part(redraw(0.05, 0.3))} d="M2 6h4" />
			<motion.path {...part(redraw(0.1, 0.3))} d="M2 10h4" />
			<motion.path {...part(redraw(0.15, 0.3))} d="M2 14h4" />
			<motion.path {...part(redraw(0.2, 0.3))} d="M2 18h4" />
		</>
	),
});
