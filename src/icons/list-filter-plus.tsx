import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const bar = (delay: number) => pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, delay });
const stroke = (delay: number) => pose({ pathLength: [1, 0, 1] }, { duration: 0.45, delay, times: [0, 0.35, 1] });
const plus = pose({ scale: [1, 0.3, 1] }, { duration: 0.5, delay: 0.3 });

export default createAnimatedIcon({
	name: "list-filter-plus",
	render: (part) => (
		<>
			<motion.path {...part(bar(0.24))} d="M10 18h4" style={centered} />
			<motion.path {...part(bar(0))} d="M11 6H3" style={edge(1, 0.5)} />
			<motion.g {...part(plus)} style={centered}>
				<motion.path {...part(stroke(0.3))} d="M15 6h6" />
				<motion.path {...part(stroke(0.4))} d="M18 9V3" />
			</motion.g>
			<motion.path {...part(bar(0.12))} d="M7 12h8" style={centered} />
		</>
	),
});
