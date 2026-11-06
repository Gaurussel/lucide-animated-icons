import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const bar = (delay: number) =>
	pose(
		{ scaleX: [1, 0.46, 1.09, 1] },
		{ duration: 0.7, delay, times: [0, 0.22, 0.42, 1], ease: ["easeIn", snap, springy] },
	);
const stack = (delay: number) =>
	pose(
		{ y: [0, 0, -3, 0], opacity: [1, 0, 0, 1] },
		{ duration: 0.65, delay, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", "easeInOut", springy] },
	);
const axis = pose(
	{ x: [0, 0, -0.9, 0], y: [0, 0, 0.9, 0] },
	{ duration: 0.7, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "chart-bar-stacked",
	render: (part) => (
		<>
			<motion.path {...part(stack(0.1))} d="M11 13v4" />
			<motion.path {...part(stack(0.04))} d="M15 5v4" />
			<motion.path {...part(axis)} d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.rect {...part(bar(0.08))} height="4" rx="1" style={edge(0, 0.5)} width="9" x="7" y="13" />
			<motion.rect {...part(bar(0))} height="4" rx="1" style={edge(0, 0.5)} width="12" x="7" y="5" />
		</>
	),
});
