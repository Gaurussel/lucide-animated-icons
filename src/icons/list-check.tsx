import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.1, 1] }, { duration: 0.5, delay, times: [0, 0.45, 1] });
const mark = pose({ pathLength: [1, 0, 1], scale: [1, 1.4, 1] }, { duration: 0.5, delay: 0.3, times: [0, 0.35, 1] });

export default createAnimatedIcon({
	name: "list-check",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M16 6H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.1))} d="M16 12H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.2))} d="M11 18H3" style={edge(1, 0.5)} />
			<motion.path {...part(mark)} d="m15 18 2 2 4-4" style={centered} />
		</>
	),
});
