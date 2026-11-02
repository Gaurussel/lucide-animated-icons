import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const sway = pose({ rotate: [0, -16, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });
const shackle = pose({ y: [0, -3.5, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "globe-lock",
	render: (part) => (
		<>
			<motion.g {...part(sway)} style={pivot(12, 12)}>
				<path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" />
				<path d="M2 12h8.5" />
			</motion.g>
			<motion.path {...part(shackle)} d="M20 6V4a2 2 0 1 0-4 0v2" />
			<motion.rect {...part(jelly(0.36, 0.7))} height="5" rx="1" style={edge(0.5, 1)} width="8" x="14" y="6" />
		</>
	),
});
