import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, springy } from "../helpers.ts";

const flight = pose(
	{ y: [0, 2, -14, 10, 0], scale: [1, 1, 0.7, 0.7, 1], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "navigation-2",
	render: (part) => (
		<motion.g {...part(hop(0.65))} style={centered}>
			<motion.polygon {...part(flight)} points="12 2 19 21 12 17 5 21 12 2" style={centered} />
		</motion.g>
	),
});
