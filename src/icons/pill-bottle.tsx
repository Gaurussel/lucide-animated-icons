import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const cap = pose({ y: [0, -5, 0], rotate: [0, -20, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "pill-bottle",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.4, 0.7))} style={edge(0.5, 1)}>
				<path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
				<path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
			</motion.g>
			<motion.rect {...part(cap)} height="5" rx="1" style={pivot(4, 7)} width="16" x="4" y="2" />
		</>
	),
});
