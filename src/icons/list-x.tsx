import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.1, 1] }, { duration: 0.5, delay, times: [0, 0.45, 1] });
const stroke = (delay: number) => pose({ pathLength: [1, 0, 1] }, { duration: 0.4, delay, times: [0, 0.4, 1] });
const cross = pose({ scale: [1, 0.7, 1] }, { duration: 0.5, delay: 0.3, times: [0, 0.45, 1] });

export default createAnimatedIcon({
	name: "list-x",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M16 6H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.1))} d="M11 12H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.2))} d="M16 18H3" style={edge(1, 0.5)} />
			<motion.g {...part(cross)} style={pivot(17, 12)}>
				<motion.path {...part(stroke(0.3))} d="m19 10-4 4" />
				<motion.path {...part(stroke(0.4))} d="m15 10 4 4" />
			</motion.g>
		</>
	),
});
