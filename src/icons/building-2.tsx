import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const rise = pose(
	{ y: [0, 0.9, -2.4, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const wing = (delay: number) =>
	pose(
		{ y: [0, 0, -1.5, 0] },
		{ duration: 0.65, delay, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "building-2",
	render: (part) => (
		<>
			<motion.g {...part(rise)}>
				<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
				<motion.path {...part(redraw(0.45, 0.22))} d="M10 6h4" />
				<motion.path {...part(redraw(0.38, 0.22))} d="M10 10h4" />
				<motion.path {...part(redraw(0.31, 0.22))} d="M10 14h4" />
				<motion.path {...part(redraw(0.24, 0.22))} d="M10 18h4" />
			</motion.g>
			<motion.path {...part(wing(0.05))} d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
			<motion.path {...part(wing(0.12))} d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
		</>
	),
});
