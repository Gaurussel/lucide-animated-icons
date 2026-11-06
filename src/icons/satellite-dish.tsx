import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const aim = pose(
	{ rotate: [0, 6, -15, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.32, 1], ease: ["easeInOut", "easeIn", springy] },
);
const wave = (delay: number) =>
	pose({ x: [0, 1.2, 0], y: [0, -1.2, 0] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "satellite-dish",
	render: (part) => (
		<>
			<motion.g {...part(aim)} style={pivot(6, 18)}>
				<path d="M4 10a7.31 7.31 0 0 0 10 10Z" />
				<path d="m9 15 3-3" />
			</motion.g>
			<motion.g {...part(wave(0.22))}>
				<motion.path {...part(redraw(0.22, 0.3))} d="M17 13a6 6 0 0 0-6-6" />
			</motion.g>
			<motion.g {...part(wave(0.3))}>
				<motion.path {...part(redraw(0.3, 0.3))} d="M21 13A10 10 0 0 0 11 3" />
			</motion.g>
		</>
	),
});
