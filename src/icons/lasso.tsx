import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const swing = pose({ rotate: [0, -28, 0] }, { duration: 0.75, times: [0, 0.22, 1], ease: [snap, ring] });
const loop = pose({ scale: [1, 1.2, 1] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "lasso",
	render: (part) => (
		<motion.g {...part(swing)} style={pivot(7, 22)}>
			<path d="M7 22a5 5 0 0 1-2-4" />
			<path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
			<motion.path
				{...part(loop)}
				d="M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"
				style={pivot(5, 16)}
			/>
		</motion.g>
	),
});
