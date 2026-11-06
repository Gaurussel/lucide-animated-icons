import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const drop = pose(
	{ y: [0, -1.35, 1.8, 0] },
	{ duration: 0.65, times: [0, 0.18, 0.38, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "book-down",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<motion.g {...part(drop)}>
				<path d="M12 13V7" />
				<path d="m9 10 3 3 3-3" />
			</motion.g>
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
		</motion.g>
	),
});
