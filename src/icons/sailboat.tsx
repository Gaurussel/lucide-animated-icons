import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const bob = pose(
	{ y: [0, -1, 2.5, 0], rotate: [0, 0, -6, 0] },
	{ duration: 0.75, times: [0, 0.1, 0.22, 1], ease: ["easeInOut", snap, ring] },
);
const sail = pose(
	{ rotate: [0, 0, 16, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "sailboat",
	render: (part) => (
		<motion.g {...part(bob)} style={pivot(12, 20)}>
			<path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
			<motion.g {...part(sail)} style={pivot(10, 18)}>
				<path d="M21 14 10 2 3 14h18Z" />
				<path d="M10 2v16" />
			</motion.g>
		</motion.g>
	),
});
