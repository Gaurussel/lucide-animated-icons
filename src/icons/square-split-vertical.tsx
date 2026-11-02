import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const apart = (direction: number) =>
	pose(
		{ y: [0, 1 * direction, -3 * direction, 0] },
		{ duration: 0.72, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "square-split-vertical",
	render: (part) => (
		<>
			<motion.path {...part(apart(1))} d="M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" />
			<motion.path {...part(apart(-1))} d="M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" />
			<motion.line {...part(redraw(0.15, 0.45))} x1="4" x2="20" y1="12" y2="12" />
		</>
	),
});
