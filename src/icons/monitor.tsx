import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const screen = pose(
	{ y: [0, -5, 0.5, 0], rotate: [0, -8, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "monitor",
	render: (part) => (
		<>
			<motion.g {...part(screen)} style={edge(0.5, 1)}>
				<rect height="14" rx="2" width="20" x="2" y="3" />
			</motion.g>
			<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
				<line x1="8" x2="16" y1="21" y2="21" />
				<line x1="12" x2="12" y1="17" y2="21" />
			</motion.g>
		</>
	),
});
