import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const boo = pose({ y: [0, -5, 0], rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, ring] });
const peek = pose(
	{ x: [0, -2, 2, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.45, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "ghost",
	render: (part) => (
		<motion.g {...part(boo)} style={pivot(12, 4)}>
			<motion.g {...part(peek)}>
				<path d="M9 10h.01" />
				<path d="M15 10h.01" />
			</motion.g>
			<path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" />
		</motion.g>
	),
});
