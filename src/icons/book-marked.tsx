import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const ribbon = pose({ y: [0, 1.8, 0] }, { duration: 0.65, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "book-marked",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<motion.path {...part(ribbon)} d="M10 2v8l3-3 3 3V2" />
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
		</motion.g>
	),
});
