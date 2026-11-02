import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, springy } from "../helpers.ts";

const flight = pose(
	{ x: [0, -2, 12, -8, 0], y: [0, 2, -12, 8, 0], scale: [1, 1, 0.5, 0.5, 1], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "navigation",
	render: (part) => (
		<motion.g {...part(hop(0.65))} style={centered}>
			<motion.polygon {...part(flight)} points="3 11 22 2 13 21 11 13 3 11" style={centered} />
		</motion.g>
	),
});
