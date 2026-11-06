import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const swing = (delay: number) =>
	pose(
		{ rotate: [0, 4.8, -14.4, 0] },
		{ duration: 0.72, delay, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
	);
const hole = pose(
	{ scale: [1, 1, 2.2, 1] },
	{ duration: 0.55, delay: 0.15, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "tags",
	render: (part) => (
		<>
			<motion.path {...part(swing(0.1))} d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" style={pivot(6.5, 9.5)} />
			<motion.g {...part(swing(0))} style={pivot(6.5, 9.5)}>
				<path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z" />
				<motion.circle {...part(hole)} cx="6.5" cy="9.5" fill="currentColor" r=".5" style={centered} />
			</motion.g>
		</>
	),
});
