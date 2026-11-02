import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const drift = pose(
	{ y: [0, -2, 3, 0], rotate: [0, -20, 200, 360] },
	{ duration: 0.75, times: [0, 0.15, 0.45, 1], ease: ["easeInOut", "easeInOut", springy], reset: true },
);
const bloom = pose(
	{ scale: [1, 1, 1.25, 1] },
	{ duration: 0.6, delay: 0.12, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "snowflake",
	render: (part) => (
		<motion.g {...part(drift)} style={pivot(12, 12)}>
			<path d="m17 21-3-6h-4" />
			<path d="m17 3-3 6 1.5 3" />
			<path d="M2 12h6.5L10 9" />
			<path d="M22 12h-6.5L14 15" />
			<path d="m7 21 3-6-1.5-3" />
			<path d="m7 3 3 6h4" />
			<motion.g {...part(bloom)} style={pivot(12, 12)}>
				<path d="m10 20-1.25-2.5L6 18" />
				<path d="M10 4 8.75 6.5 6 6" />
				<path d="m14 20 1.25-2.5L18 18" />
				<path d="m14 4 1.25 2.5L18 6" />
				<path d="m20 10-1.5 2 1.5 2" />
				<path d="m4 10 1.5 2L4 14" />
			</motion.g>
		</motion.g>
	),
});
