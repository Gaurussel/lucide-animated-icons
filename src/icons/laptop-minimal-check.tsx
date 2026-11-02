import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const lid = pose({ scaleY: [1, 0.15, 0.15, 1, 1] }, { duration: 0.9, times: [0, 0.3, 0.45, 0.7, 1] });
const base = pose({ scaleX: [1, 1, 0.9, 1, 1] }, { duration: 0.9, times: [0, 0.25, 0.4, 0.55, 1] });
const check = pose({ pathLength: [1, 1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.3, 0.45, 0.7, 1] });

export default createAnimatedIcon({
	name: "laptop-minimal-check",
	render: (part) => (
		<>
			<motion.path {...part(base)} d="M2 20h20" style={centered} />
			<motion.g {...part(lid)} style={edge(0.5, 1)}>
				<rect height="12" rx="2" width="18" x="3" y="4" />
				<motion.path {...part(check)} d="m9 10 2 2 4-4" />
			</motion.g>
		</>
	),
});
