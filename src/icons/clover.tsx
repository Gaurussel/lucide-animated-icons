import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, springy } from "../helpers.ts";

const sway = pose(
	{ rotate: [0, 4.8, -6, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeInOut", rubber] },
);
const twirl = pose(
	{ rotate: [0, 3.62, 0] },
	{ duration: 0.7, delay: 0.08, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "clover",
	render: (part) => (
		<motion.g {...part(sway)} style={pivot(2, 22)}>
			<path d="M16.17 7.83 2 22" />
			<motion.g {...part(twirl)} style={pivot(12, 12)}>
				<path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" />
				<path d="m7.83 7.83 8.34 8.34" />
			</motion.g>
		</motion.g>
	),
});
