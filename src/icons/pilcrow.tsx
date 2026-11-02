import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const drop = (delay: number) =>
	pose(
		{ y: [0, -9, 0], opacity: [1, 0, 1] },
		{ duration: 0.5, delay, times: [0, 0.02, 1], ease: ["easeIn", springy] },
	);

const bounce = pose(
	{ y: [0, 0, 2.5, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "pilcrow",
	render: (part) => (
		<motion.g {...part(bounce)}>
			<motion.path {...part(drop(0.15))} d="M13 4v16" />
			<motion.path {...part(drop(0.25))} d="M17 4v16" />
			<motion.path {...part(redraw(0, 0.45))} d="M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
		</motion.g>
	),
});
