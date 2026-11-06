import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, springy } from "../helpers.ts";

const stroke = pose(
	{ rotate: [0, 4.8, -10.8, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeIn", springy] },
);
const lag = pose(
	{ rotate: [0, 0, 8.4, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.48, 1], ease: ["easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "paint-roller",
	render: (part) => (
		<motion.g {...part(stroke)} style={pivot(10, 22)}>
			<motion.rect {...part(lag)} height="6" rx="2" style={pivot(18, 5)} width="16" x="2" y="2" />
			<path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
			<rect height="6" rx="1" width="4" x="8" y="16" />
		</motion.g>
	),
});
