import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 0, -5, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const scribble = pose(
	{ x: [0, -2, 2, -1, 0], y: [0, -1, 1, 0, 0], rotate: [0, -12, 8, -6, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "file-pen-line",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2" />
			<motion.path
				{...part(scribble)}
				d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
				style={pivot(13, 18)}
			/>
			<motion.path {...part(redraw(0.2, 0.35))} d="M8 18h1" />
		</motion.g>
	),
});
