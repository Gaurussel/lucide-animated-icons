import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dna",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scale: [1, 0.2, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))} style={centered}>
				<path d="M3.109 14.109 4 15" />
				<path d="m6.5 12.5 1 1" />
				<path d="m7 18 2.891 2.891" />
				<path d="m10 16 1.5 1.5" />
			</motion.g>
			<motion.g
				{...part(pose({ scale: [1, 0.2, 1] }, { duration: 0.7, delay: 0.12, times: [0, 0.4, 1] }))}
				style={centered}
			>
				<path d="m14 8-1.5-1.5" />
				<path d="m16.5 10.5 1 1" />
				<path d="m17 6-2.891-2.891" />
				<path d="m20 9 .891.891" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -1.5, 0] }, { duration: 0.7, times: [0, 0.4, 1] }))}>
				<path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
			</motion.g>
			<motion.g {...part(pose({ scaleY: [1, -1, 1] }, { duration: 0.8, times: [0, 0.5, 1] }))} style={centered}>
				<path d="M2 15c6.667-6 13.333 0 20-6" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 1.5, 0] }, { duration: 0.7, times: [0, 0.4, 1] }))}>
				<path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
			</motion.g>
		</>
	),
});
