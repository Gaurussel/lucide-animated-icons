import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const bass = pose(
	{ scale: [1, 1.08, 1, 1.08, 1, 1], y: [0, -0.8, 0, -0.8, 0, 0] },
	{ duration: 0.8, times: [0, 0.15, 0.3, 0.5, 0.65, 1] },
);

export default createAnimatedIcon({
	name: "headphones",
	render: (part) => (
		<motion.path
			{...part(bass)}
			d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
			style={centered}
		/>
	),
});
