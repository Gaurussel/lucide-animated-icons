import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const left = pose({ x: [0, 1.5, 1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 1] });
const right = pose({ x: [0, -1.5, -1.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 1] });
const bar = pose({ scaleX: [1, 0.3, 0.3, 1] }, { duration: 0.8, times: [0, 0.3, 0.45, 1] });
const slash = pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.45, 0.6, 1] });

export default createAnimatedIcon({
	name: "link-2-off",
	render: (part) => (
		<>
			<motion.path {...part(left)} d="M9 17H7A5 5 0 0 1 7 7" />
			<motion.path {...part(right)} d="M15 7h2a5 5 0 0 1 4 8" />
			<motion.line {...part(bar)} style={centered} x1="8" x2="12" y1="12" y2="12" />
			<motion.line {...part(slash)} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
