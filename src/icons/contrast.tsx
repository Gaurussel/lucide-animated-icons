import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const flip = pose({ scaleX: [1, -0.2, 1] }, { duration: 0.7, times: [0, 0.35, 1], ease: ["easeInOut", springy] });
const roll = pose(
	{ rotate: [0, 0, 0] },
	{ duration: 0.7, delay: 0.1, times: [0, 0.3, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "contrast",
	render: (part) => (
		<motion.g {...part(roll)} style={pivot(12, 12)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path {...part(flip)} d="M12 18a6 6 0 0 0 0-12v12z" style={pivot(12, 12)} />
		</motion.g>
	),
});
