import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.1, 1] }, { duration: 0.5, delay, times: [0, 0.45, 1] });
const chevron = (delay: number) => pose({ x: [0, -1, 2, 0] }, { duration: 0.6, delay, times: [0, 0.3, 0.7, 1] });

export default createAnimatedIcon({
	name: "list-collapse",
	render: (part) => (
		<>
			<motion.path {...part(chevron(0))} d="m3 10 3-3-3-3" />
			<motion.path {...part(chevron(0.12))} d="m3 20 3-3-3-3" />
			<motion.path {...part(line(0.05))} d="M10 6h11" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.15))} d="M10 12h11" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.25))} d="M10 18h11" style={edge(1, 0.5)} />
		</>
	),
});
