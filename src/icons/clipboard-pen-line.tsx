import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const clip = pose({ y: [0, -2.1, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });
const board = pose({ rotate: [0, -4.8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const write = pose(
	{ x: [0, -1.2, 1.2, 0], y: [0, -1.2, 0.6, 0], rotate: [0, -7.2, 4.8, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.4, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "clipboard-pen-line",
	render: (part) => (
		<>
			<motion.g {...part(board)} style={pivot(12, 22)}>
				<motion.rect {...part(clip)} height="4" rx="1" width="8" x="8" y="2" />
				<path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" />
				<path d="M16 4h2a2 2 0 0 1 1.73 1" />
				<motion.path {...part(redraw(0.2, 0.4))} d="M8 18h1" />
			</motion.g>
			<motion.path
				{...part(write)}
				d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
				style={pivot(13.5, 18)}
			/>
		</>
	),
});
