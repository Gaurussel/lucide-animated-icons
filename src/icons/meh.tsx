import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const shrug = pose({ rotate: [0, -7.2, 0] }, { duration: 0.75, times: [0, 0.22, 1], ease: [snap, ring] });
const mouth = pose({ rotate: [0, 12, 0] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, springy] });
const roll = pose({ x: [0, 1.2, 0], y: [0, -1.2, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "meh",
	render: (part) => (
		<motion.g {...part(shrug)} style={pivot(12, 22)}>
			<circle cx="12" cy="12" r="10" />
			<motion.line {...part(mouth)} style={centered} x1="8" x2="16" y1="15" y2="15" />
			<motion.g {...part(roll)}>
				<line x1="9" x2="9.01" y1="9" y2="9" />
				<line x1="15" x2="15.01" y1="9" y2="9" />
			</motion.g>
		</motion.g>
	),
});
