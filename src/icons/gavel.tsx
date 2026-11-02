import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const strike = pose(
	{ rotate: [0, -20, -20, 0, 0, 0], y: [0, 0, 0, 0, 1, 0] },
	{ duration: 0.8, times: [0, 0.3, 0.45, 0.6, 0.7, 1] },
);

export default createAnimatedIcon({
	name: "gavel",
	render: (part) => (
		<motion.g {...part(strike)} style={pivot(4, 20)}>
			<path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
			<path d="m16 16 6-6" />
			<path d="m8 8 6-6" />
			<path d="m9 7 8 8" />
			<path d="m21 11-8-8" />
		</motion.g>
	),
});
