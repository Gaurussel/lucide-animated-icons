import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const shackle = pose({ y: [0, -1.5, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "book-lock",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<motion.path {...part(shackle)} d="M18 6V4a2 2 0 1 0-4 0v2" />
			<path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" />
			<motion.rect {...part(jelly(0.36, 0.65))} height="5" rx="1" style={edge(0.5, 1)} width="8" x="12" y="6" />
		</motion.g>
	),
});
