import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const cups = pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.8, times: [0, 0.2, 0.45, 1] });
const slash = pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, delay: 0.15, times: [0, 0.2, 0.4, 0.85] });

export default createAnimatedIcon({
	name: "headphone-off",
	render: (part) => (
		<>
			<motion.g {...part(cups)} style={pivot(12, 12)}>
				<path d="M21 14h-1.343" />
				<path d="M9.128 3.47A9 9 0 0 1 21 12v3.343" />
				<path d="M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" />
				<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" />
			</motion.g>
			<motion.path {...part(slash)} d="m2 2 20 20" />
		</>
	),
});
