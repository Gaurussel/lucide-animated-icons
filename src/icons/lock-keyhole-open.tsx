import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose } from "../helpers.ts";

const shackle = pose({ rotate: [0, 28, 28, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] });
const body = pose({ scaleY: [1, 1, 0.93, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] });
const dot = pose({ scale: [1, 1, 1.6, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] });

export default createAnimatedIcon({
	name: "lock-keyhole-open",
	render: (part) => (
		<>
			<motion.circle {...part(dot)} cx="12" cy="16" r="1" style={centered} />
			<motion.rect {...part(body)} height="12" rx="2" style={edge(0.5, 1)} width="18" x="3" y="10" />
			<motion.path {...part(shackle)} d="M7 10V7a5 5 0 0 1 9.33-2.5" style={pivot(7, 10)} />
		</>
	),
});
