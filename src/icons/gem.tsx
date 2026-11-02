import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, redraw, ring, snap } from "../helpers.ts";

const glint = pose({ y: [0, -3, 0], rotate: [0, -16, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "gem",
	render: (part) => (
		<motion.g {...part(hop(0.75))} style={centered}>
			<motion.g {...part(glint)} style={pivot(12, 22)}>
				<path d="M6 3h12l4 6-10 13L2 9Z" />
				<motion.path {...part(redraw(0.15, 0.5))} d="M11 3 8 9l4 13 4-13-3-6" />
				<path d="M2 9h20" />
			</motion.g>
		</motion.g>
	),
});
