import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.2, 1] }, { duration: 0.5, delay });
const stroke = pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.3, times: [0, 0.35, 1] });
const plus = pose({ scale: [1, 0.3, 1] }, { duration: 0.5, delay: 0.3 });

export default createAnimatedIcon({
	name: "list-plus",
	render: (part) => (
		<>
			<motion.path {...part(line(0.1))} d="M11 12H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0))} d="M16 6H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.2))} d="M16 18H3" style={edge(1, 0.5)} />
			<motion.g {...part(plus)} style={centered}>
				<motion.path {...part(stroke)} d="M18 9v6" />
				<motion.path {...part(stroke)} d="M21 12h-6" />
			</motion.g>
		</>
	),
});
