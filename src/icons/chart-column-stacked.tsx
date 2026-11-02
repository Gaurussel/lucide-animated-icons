import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const bar = (delay: number) =>
	pose(
		{ scaleY: [1, 0.1, 1.2, 1] },
		{ duration: 0.7, delay, times: [0, 0.22, 0.45, 1], ease: ["easeIn", snap, springy] },
	);
const axis = pose({ x: [0, -1.5, 0], y: [0, 1.5, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "chart-column-stacked",
	render: (part) => (
		<>
			<motion.path {...part(axis)} d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.g {...part(bar(0))} style={edge(0.5, 1)}>
				<path d="M11 13H7" />
				<rect height="9" rx="1" width="4" x="7" y="8" />
			</motion.g>
			<motion.g {...part(bar(0.08))} style={edge(0.5, 1)}>
				<path d="M19 9h-4" />
				<rect height="12" rx="1" width="4" x="15" y="5" />
			</motion.g>
		</>
	),
});
