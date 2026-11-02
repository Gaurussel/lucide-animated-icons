import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const meridian = pose({ x: [0, 4, 0] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "globe",
	render: (part) => (
		<motion.g {...part(turn)} style={pivot(12, 12)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path {...part(meridian)} d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
			<path d="M2 12h20" />
		</motion.g>
	),
});
