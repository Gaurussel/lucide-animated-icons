import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const drop = (delay: number) =>
	pose(
		{ y: [0, -5.4, 0], opacity: [1, 0, 1] },
		{ duration: 0.5, delay, times: [0, 0.02, 1], ease: ["easeIn", springy] },
	);

const bounce = pose(
	{ y: [0, 0, 1.5, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "pi",
	render: (part) => (
		<motion.g {...part(bounce)}>
			<motion.line {...part(drop(0.15))} x1="9" x2="9" y1="4" y2="20" />
			<motion.path {...part(redraw(0, 0.4))} d="M4 7c0-1.7 1.3-3 3-3h13" />
			<motion.path {...part(drop(0.25))} d="M18 20c-1.7 0-3-1.3-3-3V4" />
		</motion.g>
	),
});
