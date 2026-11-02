import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, snap, springy } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] };

export default createAnimatedIcon({
	name: "panels-left-bottom",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(pose({ x: [0, -4, 0] }, timing))} d="M9 3v18" />
			<motion.path {...part(pose({ scaleX: [1, 1.33, 1] }, timing))} d="M9 15h12" style={pivot(21, 15)} />
		</motion.g>
	),
});
