import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.1, 1] }, { duration: 0.5, delay, times: [0, 0.45, 1] });
const trace = pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay: 0.3, times: [0, 0.4, 1] });
const head = pose({ x: [0, 1.5, -1, 0] }, { duration: 0.7, delay: 0.2, times: [0, 0.3, 0.65, 1] });

export default createAnimatedIcon({
	name: "list-start",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M10 6H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.1))} d="M16 12H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.2))} d="M16 18H3" style={edge(1, 0.5)} />
			<motion.path {...part(trace)} d="M21 18V8a2 2 0 0 0-2-2h-5" />
			<motion.path {...part(head)} d="m16 8-2-2 2-2" />
		</>
	),
});
