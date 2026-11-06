import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const sweep = pose({ rotate: [0, -66, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: ["easeInOut", ring] });

const body = pose(
	{ y: [0, -2.4, 0], rotate: [0, -4.8, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "gauge",
	render: (part) => (
		<motion.g {...part(body)} style={pivot(12, 19)}>
			<motion.path {...part(sweep)} d="m12 14 4-4" style={pivot(12, 14)} />
			<path d="M3.34 19a10 10 0 1 1 17.32 0" />
		</motion.g>
	),
});
