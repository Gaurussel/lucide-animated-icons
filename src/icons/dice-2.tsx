import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const roll = pose(
	{ y: [0, -5, 0], rotate: [0, 200, 360] },
	{ duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy], reset: true },
);
const pip = (delay: number) =>
	pose({ scale: [1, 0, 1] }, { duration: 0.6, delay, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "dice-2",
	render: (part) => (
		<motion.g {...part(roll)} style={pivot(12, 12)}>
			<rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
			<motion.path {...part(pip(0.1))} d="M15 9h.01" style={centered} />
			<motion.path {...part(pip(0.14))} d="M9 15h.01" style={centered} />
		</motion.g>
	),
});
