import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const focus = (x: number, y: number) =>
	pose({ x: [0, 2 * x, 0], y: [0, 2 * y, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const look = pose(
	{ x: [0, -3, 3, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.42, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "scan-eye",
	render: (part) => (
		<>
			<motion.path {...part(focus(1, 1))} d="M3 7V5a2 2 0 0 1 2-2h2" />
			<motion.path {...part(focus(-1, 1))} d="M17 3h2a2 2 0 0 1 2 2v2" />
			<motion.path {...part(focus(-1, -1))} d="M21 17v2a2 2 0 0 1-2 2h-2" />
			<motion.path {...part(focus(1, -1))} d="M7 21H5a2 2 0 0 1-2-2v-2" />
			<motion.circle {...part(look)} cx="12" cy="12" r="1" />
			<path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
		</>
	),
});
