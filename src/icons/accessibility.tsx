import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const roll = pose(
	{ x: [0, -0.9, 1.8, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const wheel = pose(
	{ rotate: [0, 3.62, 0] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const wave = pose({ rotate: [0, -15, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "accessibility",
	render: (part) => (
		<motion.g {...part(roll)}>
			<circle cx="16" cy="4" r="1" />
			<path d="m18 19 1-7-6 1" />
			<motion.path {...part(wave)} d="m5 8 3-3 5.5 3-2.36 3.5" style={pivot(11, 11)} />
			<motion.g {...part(wheel)} style={pivot(9, 16)}>
				<path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
				<path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
			</motion.g>
		</motion.g>
	),
});
