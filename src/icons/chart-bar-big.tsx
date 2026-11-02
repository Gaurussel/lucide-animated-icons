import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const bar = (delay: number) =>
	pose(
		{ scaleX: [1, 0.1, 1.2, 1] },
		{ duration: 0.7, delay, times: [0, 0.22, 0.45, 1], ease: ["easeIn", snap, springy] },
	);
const axis = pose({ x: [0, -1.5, 0], y: [0, 1.5, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "chart-bar-big",
	render: (part) => (
		<>
			<motion.path {...part(axis)} d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.rect {...part(bar(0.08))} height="4" rx="1" style={edge(0, 0.5)} width="9" x="7" y="13" />
			<motion.rect {...part(bar(0))} height="4" rx="1" style={edge(0, 0.5)} width="12" x="7" y="5" />
		</>
	),
});
