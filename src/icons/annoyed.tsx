import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const tilt = pose(
	{ rotate: [0, -18, 0], x: [0, -2.5, 0] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, rubber] },
);
const grumble = pose({ rotate: [0, 15, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });
const roll = pose(
	{ x: [0, 0, 2, 0], y: [0, -3, -3, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.45, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "annoyed",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 12)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path {...part(grumble)} d="M8 15h8" style={pivot(12, 15)} />
			<motion.g {...part(roll)}>
				<path d="M8 9h2" />
				<path d="M14 9h2" />
			</motion.g>
		</motion.g>
	),
});
