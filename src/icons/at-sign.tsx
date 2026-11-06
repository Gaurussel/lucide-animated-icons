import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const whirl = pose(
	{ rotate: [0, 3.62, 0] },
	{ duration: 0.7, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const core = pose({ scale: [1, 0.76, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "at-sign",
	render: (part) => (
		<>
			<motion.circle {...part(core)} cx="12" cy="12" r="4" style={centered} />
			<motion.path {...part(whirl)} d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" style={pivot(12, 12)} />
		</>
	),
});
