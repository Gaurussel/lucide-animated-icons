import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const jab = pose(
	{ x: [0, 1.2, -1.8, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "iteration-cw",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0, 0.65))} d="M4 10a8 8 0 1 1 8 8H4" />
			<motion.path {...part(jab)} d="m8 22-4-4 4-4" />
		</>
	),
});
