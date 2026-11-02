import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const shiver = pose({ rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const frost = pose(
	{ scale: [1, 0.6, 1], rotate: [0, -60, 0] },
	{ duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "thermometer-snowflake",
	render: (part) => (
		<>
			<motion.g {...part(frost)} style={pivot(10, 12)}>
				<path d="m10 20-1.25-2.5L6 18" />
				<path d="M10 4 8.75 6.5 6 6" />
				<path d="M10.585 15H10" />
				<path d="M2 12h6.5L10 9" />
				<path d="m4 10 1.5 2L4 14" />
				<path d="m7 21 3-6-1.5-3" />
				<path d="m7 3 3 6h2" />
			</motion.g>
			<motion.path {...part(shiver)} d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" style={pivot(18, 18)} />
		</>
	),
});
