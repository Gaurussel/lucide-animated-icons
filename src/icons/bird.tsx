import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -1.8, 0.48, 0] },
	{ duration: 0.65, times: [0, 0.25, 0.4, 1], ease: [snap, "easeIn", springy] },
);
const flap = pose({ rotate: [0, -18, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "bird",
	render: (part) => (
		<motion.g {...part(leap)}>
			<path d="M16 7h.01" />
			<path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
			<path d="m20 7 2 .5-2 .5" />
			<path d="M10 18v3" />
			<path d="M14 17.75V21" />
			<motion.path {...part(flap)} d="M7 18a6 6 0 0 0 3.84-10.61" style={pivot(7, 18)} />
		</motion.g>
	),
});
