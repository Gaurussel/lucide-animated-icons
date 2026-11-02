import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const bop = pose({ y: [0, -3, 0], rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });
const mic = pose({ rotate: [0, 25, 0] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "headset",
	render: (part) => (
		<motion.g {...part(bop)} style={pivot(12, 12)}>
			<path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" />
			<motion.path {...part(mic)} d="M21 16v2a4 4 0 0 1-4 4h-5" style={pivot(21, 16)} />
		</motion.g>
	),
});
