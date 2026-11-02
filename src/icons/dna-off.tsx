import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dna-off",
	render: (part) => (
		<>
			<motion.g {...part(pose({ opacity: [1, 0.35, 1] }, { duration: 0.8, times: [0, 0.5, 1] }))}>
				<path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
				<path d="M2 15c3.333-3 6.667-3 10-3" />
				<path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
				<path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
			</motion.g>
			<motion.g {...part(pose({ scale: [1, 0.3, 1] }, { duration: 0.8, times: [0, 0.5, 1] }))} style={centered}>
				<path d="m17 6-2.891-2.891" />
				<path d="m20 9 .891.891" />
				<path d="M3.109 14.109 4 15" />
				<path d="m6.5 12.5 1 1" />
				<path d="m7 18 2.891 2.891" />
			</motion.g>
			<motion.g {...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}>
				<path d="m2 2 20 20" />
			</motion.g>
		</>
	),
});
