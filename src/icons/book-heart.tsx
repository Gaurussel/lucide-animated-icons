import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const beat = pose({ scale: [1, 1.21, 1] }, { duration: 0.6, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "book-heart",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<motion.path
				{...part(beat)}
				d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"
				style={centered}
			/>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
		</motion.g>
	),
});
