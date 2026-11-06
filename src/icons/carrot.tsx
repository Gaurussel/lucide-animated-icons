import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const pull = pose({ x: [0, 1.8, 0], y: [0, -1.8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const leaves = pose({ rotate: [0, 13.2, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", ring] });

export default createAnimatedIcon({
	name: "carrot",
	render: (part) => (
		<motion.g {...part(pull)}>
			<path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" />
			<motion.g {...part(leaves)} style={pivot(15, 9)}>
				<path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" />
				<path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" />
			</motion.g>
		</motion.g>
	),
});
