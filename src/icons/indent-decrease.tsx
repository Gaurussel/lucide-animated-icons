import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const chevron = pose({ x: [0, 2, -1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] });
const line = (delay: number) => pose({ x: [0, 1.5, -4, 0] }, { duration: 0.7, delay, times: [0, 0.3, 0.65, 1] });

export default createAnimatedIcon({
	name: "indent-decrease",
	render: (part) => (
		<>
			<motion.path {...part(chevron)} d="m7 8-4 4 4 4" />
			<motion.path {...part(line(0))} d="M21 6H11" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.06))} d="M21 12H11" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.12))} d="M21 18H11" style={edge(1, 0.5)} />
		</>
	),
});
