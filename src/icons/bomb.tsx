import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap } from "../helpers.ts";

const tremble = pose({ rotate: [0, -10, 0] }, { duration: 0.75, times: [0, 0.12, 1], ease: [snap, ring] });
const spark = pose({ scale: [1, 2.2, 1] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "bomb",
	render: (part) => (
		<motion.g {...part(tremble)} style={pivot(11, 22)}>
			<circle cx="11" cy="13" r="9" />
			<path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" />
			<motion.path {...part(spark)} d="m22 2-1.5 1.5" style={centered} />
		</motion.g>
	),
});
