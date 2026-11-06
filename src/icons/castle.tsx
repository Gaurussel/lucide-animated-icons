import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const merlon = (delay: number) =>
	pose({ y: [0, -2.4, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const tower = pose(
	{ y: [0, -2.4, 0], rotate: [0, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "castle",
	render: (part) => (
		<>
			<path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
			<motion.g {...part(tower)} style={pivot(12, 11)}>
				<path d="M18 11V4H6v7" />
				<motion.path {...part(merlon(0))} d="M6 4V2" />
				<motion.path {...part(merlon(0.06))} d="M10 4V2" />
				<motion.path {...part(merlon(0.12))} d="M14 4V2" />
				<motion.path {...part(merlon(0.18))} d="M18 4V2" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.5))} d="M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4" />
			<motion.path {...part(merlon(0.03))} d="M2 11V9" />
			<motion.path {...part(merlon(0.21))} d="M22 11V9" />
		</>
	),
});
