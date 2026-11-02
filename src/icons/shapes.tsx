import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, snap, springy } from "../helpers.ts";

const jump = pose({ y: [0, -4, 0], rotate: [0, -20, 0] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });
const roll = pose(
	{ rotate: [0, -20, 360] },
	{ duration: 0.62, delay: 0.08, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const bounce = pose(
	{ scale: [1, 1.35, 1] },
	{ duration: 0.58, delay: 0.16, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "shapes",
	render: (part) => (
		<>
			<motion.path
				{...part(jump)}
				d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
				style={edge(0.5, 1)}
			/>
			<motion.rect {...part(roll)} height="7" rx="1" style={centered} width="7" x="3" y="14" />
			<motion.circle {...part(bounce)} cx="17.5" cy="17.5" r="3.5" style={centered} />
		</>
	),
});
