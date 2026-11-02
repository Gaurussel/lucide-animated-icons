import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const lid = pose({ y: [0, -5, 0], rotate: [0, -12, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });
const cross = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "archive-x",
	render: (part) => (
		<>
			<motion.rect {...part(lid)} height="5" rx="1" style={edge(0, 1)} width="20" x="2" y="3" />
			<motion.g {...part(jelly(0.4, 0.65))} style={edge(0.5, 1)}>
				<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
				<motion.g {...part(cross)} style={pivot(12, 14.5)}>
					<path d="m9.5 17 5-5" />
					<path d="m9.5 12 5 5" />
				</motion.g>
			</motion.g>
		</>
	),
});
