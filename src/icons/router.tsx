import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const led = (delay: number) =>
	pose({ scale: [1, 2.2, 1] }, { duration: 0.4, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const antenna = pose(
	{ y: [0, 0, -2.5, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const wave = (delay: number) =>
	pose({ y: [0, -2, 0] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "router",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.05, 0.7))} height="8" rx="2" style={edge(0.5, 1)} width="20" x="2" y="14" />
			<motion.path {...part(led(0))} d="M6.01 18H6" style={centered} />
			<motion.path {...part(led(0.07))} d="M10.01 18H10" style={centered} />
			<motion.path {...part(antenna)} d="M15 10v4" />
			<motion.g {...part(wave(0.22))}>
				<motion.path {...part(redraw(0.22, 0.3))} d="M17.84 7.17a4 4 0 0 0-5.66 0" />
			</motion.g>
			<motion.g {...part(wave(0.3))}>
				<motion.path {...part(redraw(0.3, 0.3))} d="M20.66 4.34a8 8 0 0 0-11.31 0" />
			</motion.g>
		</>
	),
});
