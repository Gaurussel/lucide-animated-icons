import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, -20, 360], scale: [1, 0.8, 1] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "ratio",
	render: (part) => (
		<>
			<motion.rect {...part(turn)} height="20" rx="2" style={pivot(12, 12)} width="12" x="6" y="2" />
			<motion.rect {...part(turn)} height="12" rx="2" style={pivot(12, 12)} width="20" x="2" y="6" />
		</>
	),
});
