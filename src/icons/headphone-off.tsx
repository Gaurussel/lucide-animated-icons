import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const bop = pose({ y: [0, -1.8, 0], rotate: [0, -8.4, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "headphone-off",
	render: (part) => (
		<>
			<motion.g {...part(bop)} style={pivot(12, 12)}>
				<path d="M21 14h-1.343" />
				<path d="M9.128 3.47A9 9 0 0 1 21 12v3.343" />
				<path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" />
				<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.55))} d="m2 2 20 20" />
		</>
	),
});
