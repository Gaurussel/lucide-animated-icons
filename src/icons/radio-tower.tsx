import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const core = pose(
	{ scale: [1, 0.5, 1.6, 1] },
	{ duration: 0.6, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const wave = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "radio-tower",
	render: (part) => (
		<>
			<motion.g {...part(wave(-2, 0.24))}>
				<motion.path {...part(redraw(0.24, 0.35))} d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
			</motion.g>
			<motion.g {...part(wave(-1.5, 0.14))}>
				<motion.path {...part(redraw(0.14, 0.35))} d="M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" />
			</motion.g>
			<motion.circle {...part(core)} cx="12" cy="9" r="2" style={centered} />
			<motion.g {...part(wave(1.5, 0.14))}>
				<motion.path {...part(redraw(0.14, 0.35))} d="M16.2 4.8c2 2 2.26 5.11.8 7.47" />
			</motion.g>
			<motion.g {...part(wave(2, 0.24))}>
				<motion.path {...part(redraw(0.24, 0.35))} d="M19.1 1.9a9.96 9.96 0 0 1 0 14.1" />
			</motion.g>
			<motion.g {...part(jelly(0.08, 0.7))} style={edge(0.5, 1)}>
				<path d="M9.5 18h5" />
				<path d="m8 22 4-11 4 11" />
			</motion.g>
		</>
	),
});
