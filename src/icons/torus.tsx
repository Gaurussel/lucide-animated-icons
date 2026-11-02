import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const spin = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const hole = pose({ scale: [1, 1.6, 1] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "torus",
	render: (part) => (
		<motion.g {...part(spin)} style={pivot(12, 12.5)}>
			<motion.ellipse {...part(hole)} cx="12" cy="11" rx="3" ry="2" style={centered} />
			<ellipse cx="12" cy="12.5" rx="10" ry="8.5" />
		</motion.g>
	),
});
