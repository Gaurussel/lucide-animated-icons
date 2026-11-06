import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, snap, springy } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] };

export default createAnimatedIcon({
	name: "panels-top-left",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(pose({ y: [0, -2.4, 0] }, timing))} d="M3 9h18" />
			<motion.path {...part(pose({ scaleY: [1, 1.2, 1] }, timing))} d="M9 21V9" style={pivot(9, 21)} />
		</motion.g>
	),
});
