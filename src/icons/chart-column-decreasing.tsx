import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const bar = (delay: number) =>
	pose(
		{ scaleY: [1, 0.46, 1.12, 1] },
		{ duration: 0.7, delay, times: [0, 0.22, 0.45, 1], ease: ["easeIn", snap, springy] },
	);
const axis = pose({ x: [0, -0.9, 0], y: [0, 0.9, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "chart-column-decreasing",
	render: (part) => (
		<>
			<motion.path {...part(bar(0.05))} d="M13 17V9" style={edge(0.5, 1)} />
			<motion.path {...part(bar(0.1))} d="M18 17v-3" style={edge(0.5, 1)} />
			<motion.path {...part(axis)} d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.path {...part(bar(0))} d="M8 17V5" style={edge(0.5, 1)} />
		</>
	),
});
