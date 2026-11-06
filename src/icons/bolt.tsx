import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const tighten = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.7, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const pop = pose({ scale: [1, 0.76, 1] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "bolt",
	render: (part) => (
		<>
			<motion.path
				{...part(tighten)}
				d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
				style={pivot(12, 12)}
			/>
			<motion.circle {...part(pop)} cx="12" cy="12" r="4" style={centered} />
		</>
	),
});
