import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const lid = pose({ scaleY: [1, 0.15, 0.15, 1] }, { duration: 0.8, times: [0, 0.35, 0.55, 1] });
const base = pose({ scaleX: [1, 1, 0.9, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 1] });

export default createAnimatedIcon({
	name: "laptop-minimal",
	render: (part) => (
		<>
			<motion.rect {...part(lid)} height="12" rx="2" ry="2" style={edge(0.5, 1)} width="18" x="3" y="4" />
			<motion.line {...part(base)} style={centered} x1="2" x2="22" y1="20" y2="20" />
		</>
	),
});
