import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const swing = pose({ rotate: [0, 25, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });
const listen = pose({ y: [0, -2, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "stethoscope",
	render: (part) => (
		<>
			<motion.g {...part(listen)}>
				<path d="M11 2v2" />
				<path d="M5 2v2" />
				<path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
			</motion.g>
			<motion.g {...part(swing)} style={pivot(8, 15)}>
				<path d="M8 15a6 6 0 0 0 12 0v-3" />
				<circle cx="20" cy="10" r="2" />
			</motion.g>
		</>
	),
});
