import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const shackle = pose({ rotate: [0, 27, 27, 0] }, { duration: 0.8, times: [0, 0.35, 0.65, 1] });
const body = pose({ scaleY: [1, 1, 0.93, 1] }, { duration: 0.8, times: [0, 0.35, 0.5, 1] });

export default createAnimatedIcon({
	name: "lock-open",
	render: (part) => (
		<>
			<motion.rect {...part(body)} height="11" rx="2" ry="2" style={edge(0.5, 1)} width="18" x="3" y="11" />
			<motion.path {...part(shackle)} d="M7 11V7a5 5 0 0 1 9.9-1" style={pivot(7, 11)} />
		</>
	),
});
