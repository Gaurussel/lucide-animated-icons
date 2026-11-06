import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const head = pose({ y: [0, -2.4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const shoulders = pose({ y: [0, -0.9, 0] }, { duration: 0.7, delay: 0.04, times: [0, 0.25, 1], ease: [snap, springy] });

const scribble = pose(
	{ x: [0, -1.2, 1.2, -0.6, 0], y: [0, -0.6, 0.6, 0, 0], rotate: [0, -7.2, 4.8, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "user-round-pen",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M2 21a8 8 0 0 1 10.821-7.487" />
			<motion.circle {...part(head)} cx="10" cy="8" r="5" />
			<motion.path
				{...part(scribble)}
				d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
				style={pivot(13.5, 21)}
			/>
		</>
	),
});
