import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const flap = pose({ rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });
const curl = pose(
	{ x: [0, -2, 0], y: [0, 2, 0] },
	{ duration: 0.65, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "sticky-note",
	render: (part) => (
		<motion.g {...part(flap)} style={pivot(12, 3)}>
			<path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
			<motion.path {...part(curl)} d="M15 3v4a2 2 0 0 0 2 2h4" />
		</motion.g>
	),
});
