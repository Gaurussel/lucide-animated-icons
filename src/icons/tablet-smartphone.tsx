import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const pop = pose(
	{ x: [0, -1.8, 0], y: [0, -1.2, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.68, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "tablet-smartphone",
	render: (part) => (
		<>
			<motion.g {...part(pop)} style={pivot(8, 22)}>
				<rect height="14" rx="2" width="10" x="3" y="8" />
				<path d="M8 18h.01" />
			</motion.g>
			<motion.path
				{...part(jelly(0.25, 0.68))}
				d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
