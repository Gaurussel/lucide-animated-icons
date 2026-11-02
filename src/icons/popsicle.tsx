import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const lick = pose(
	{ rotate: [0, 8, -22, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
);
const wobble = pose(
	{ rotate: [0, 0, 18, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "popsicle",
	render: (part) => (
		<motion.g {...part(lick)} style={pivot(21, 21)}>
			<motion.path
				{...part(wobble)}
				d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
				style={pivot(16, 16)}
			/>
			<path d="m22 22-5.5-5.5" />
		</motion.g>
	),
});
