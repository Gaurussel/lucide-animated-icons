import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const lean = pose({ rotate: [0, -8, 6, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] });
const scoop = pose({ rotate: [0, 0, -6, 0], y: [0, 0, 1, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] });

export default createAnimatedIcon({
	name: "ice-cream-cone",
	render: (part) => (
		<motion.g {...part(lean)} style={pivot(12, 21)}>
			<path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
			<motion.g {...part(scoop)} style={pivot(12, 11)}>
				<path d="M17 7A5 5 0 0 0 7 7" />
				<path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
			</motion.g>
		</motion.g>
	),
});
