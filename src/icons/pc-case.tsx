import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const led = pose(
	{ scale: [1, 0.3, 3, 1] },
	{ duration: 0.7, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "pc-case",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.42, 0.7))} height="20" rx="2" style={edge(0.5, 1)} width="14" x="5" y="2" />
			<motion.path {...part(led)} d="M15 14h.01" style={centered} />
			<motion.path {...part(redraw(0.18, 0.35))} d="M9 6h6" />
			<motion.path {...part(redraw(0.28, 0.35))} d="M9 10h6" />
		</>
	),
});
