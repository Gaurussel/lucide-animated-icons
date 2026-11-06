import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, redraw, rubber, snap } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] };

export default createAnimatedIcon({
	name: "ruler-dimension-line",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<motion.path {...part(redraw(0.16, 0.35))} d="M12 15v-3.014" />
			<motion.path {...part(redraw(0.24, 0.35))} d="M16 15v-3.014" />
			<motion.path {...part(pose({ scaleX: [1, 1.18, 1] }, timing))} d="M20 6H4" style={pivot(12, 6)} />
			<motion.path {...part(pose({ x: [0, 1.44, 0] }, timing))} d="M20 8V4" />
			<motion.path {...part(pose({ x: [0, -1.44, 0] }, timing))} d="M4 8V4" />
			<motion.path {...part(redraw(0.08, 0.35))} d="M8 15v-3.014" />
			<rect height="7" rx="1" width="18" x="3" y="12" />
		</motion.g>
	),
});
