import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const tip = pose(
	{ y: [0, -3, 0], rotate: [0, -10.8, 0] },
	{ duration: 0.75, times: [0, 0.28, 1], ease: [snap, springy] },
);
const crest = pose(
	{ y: [0, 0, -1.5, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.35, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "hard-hat",
	render: (part) => (
		<motion.g {...part(tip)} style={pivot(2, 19)}>
			<motion.path {...part(crest)} d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
			<path d="M14 6a6 6 0 0 1 6 6v3" />
			<path d="M4 15v-3a6 6 0 0 1 6-6" />
			<motion.rect {...part(jelly(0.42, 0.75))} height="4" rx="1" style={edge(0.5, 1)} width="20" x="2" y="15" />
		</motion.g>
	),
});
