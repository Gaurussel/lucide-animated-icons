import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const trunk = pose(
	{ rotate: [0, 1.8, -4.8, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.26, 1], ease: ["easeInOut", snap, ring] },
);
const frond = (degrees: number, at: number) =>
	pose(
		{ rotate: [0, 0, degrees, 0] },
		{ duration: 0.72, times: [0, at, at + 0.14, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "tree-palm",
	render: (part) => (
		<motion.g {...part(trunk)} style={pivot(12, 22)}>
			<motion.path
				{...part(frond(-22, 0.14))}
				d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"
				style={pivot(12, 8)}
			/>
			<motion.path
				{...part(frond(-16, 0.2))}
				d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"
				style={pivot(13, 8)}
			/>
			<motion.path
				{...part(frond(-24, 0.26))}
				d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"
				style={pivot(12, 9)}
			/>
			<path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" />
		</motion.g>
	),
});
