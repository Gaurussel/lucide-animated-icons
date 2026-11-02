import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const node = (delay: number) =>
	pose(
		{ scale: [1, 0.6, 1.35, 1] },
		{ duration: 0.5, delay, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
	);
const axis = pose(
	{ x: [0, 0, -1.5, 0], y: [0, 0, 1.5, 0] },
	{ duration: 0.7, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "chart-network",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0, 0.2))} d="m20 4-6.06 1.515" />
			<motion.path {...part(redraw(0.16, 0.2))} d="m13.11 7.664 1.78 2.672" />
			<motion.path {...part(redraw(0.3, 0.2))} d="m14.162 12.788-3.324 1.424" />
			<motion.path {...part(axis)} d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.circle {...part(node(0.06))} cx="12" cy="6" r="2" style={centered} />
			<motion.circle {...part(node(0.2))} cx="16" cy="12" r="2" style={centered} />
			<motion.circle {...part(node(0.34))} cx="9" cy="15" r="2" style={centered} />
		</>
	),
});
