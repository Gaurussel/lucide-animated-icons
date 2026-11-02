import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, -6, 0], rotate: [0, 200, 360] },
	{ duration: 0.75, times: [0, 0.35, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "georgian-lari",
	render: (part) => (
		<>
			<motion.g {...part(toss)} style={pivot(12, 13.5)}>
				<path d="M11.5 21a7.5 7.5 0 1 1 7.35-9" />
				<path d="M13 12V3" />
				<path d="M9 12V3" />
			</motion.g>
			<motion.path {...part(jelly(0.4, 0.75))} d="M4 21h16" style={edge(0.5, 1)} />
		</>
	),
});
