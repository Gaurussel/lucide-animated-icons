import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const stroke = (delay: number) =>
	pose(
		{ pathLength: [1, 0, 1, 1], y: [0, 0, -3.6, 0] },
		{ duration: 0.55, delay, times: [0, 0.01, 0.4, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "tally-5",
	render: (part) => (
		<>
			<motion.path {...part(stroke(0))} d="M4 4v16" />
			<motion.path {...part(stroke(0.06))} d="M9 4v16" />
			<motion.path {...part(stroke(0.12))} d="M14 4v16" />
			<motion.path {...part(stroke(0.18))} d="M19 4v16" />
			<motion.path {...part(redraw(0.28, 0.4))} d="M22 6 2 18" />
		</>
	),
});
