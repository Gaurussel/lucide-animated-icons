import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const swing = pose({ rotate: [0, 40, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const pop = pose({ scale: [1, 2.5, 1] }, { duration: 0.6, delay: 0.1, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "redo-dot",
	render: (part) => (
		<>
			<motion.circle {...part(pop)} cx="12" cy="17" r="1" style={centered} />
			<motion.g {...part(swing)} style={pivot(12, 17)}>
				<path d="M21 7v6h-6" />
				<path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
			</motion.g>
		</>
	),
});
