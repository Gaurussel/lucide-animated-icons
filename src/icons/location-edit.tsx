import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const scribble = pose(
	{ x: [0, -1.2, 1.2, -0.6, 0], y: [0, -0.6, 0.6, 0, 0], rotate: [0, -7.2, 4.8, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);
const dot = pose(
	{ y: [0, -1.8, 0], scale: [1, 1.18, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "location-edit",
	render: (part) => (
		<>
			<path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" />
			<motion.circle {...part(dot)} cx="10" cy="10" r="3" style={centered} />
			<motion.path
				{...part(scribble)}
				d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
				style={pivot(13.5, 21.5)}
			/>
		</>
	),
});
