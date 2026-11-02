import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const jab = pose(
	{ x: [0, -2, 3, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "iteration-ccw",
	render: (part) => (
		<>
			<motion.path {...part(jab)} d="m16 14 4 4-4 4" />
			<motion.path {...part(redraw(0, 0.65))} d="M20 10a8 8 0 1 0-8 8h8" />
		</>
	),
});
