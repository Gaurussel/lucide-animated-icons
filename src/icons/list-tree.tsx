import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const trunk = (delay: number) => pose({ pathLength: [1, 0, 1] }, { duration: 0.5, delay, times: [0, 0.35, 1] });
const branch = (delay: number) => pose({ scaleX: [1, 0.15, 1] }, { duration: 0.4, delay });

export default createAnimatedIcon({
	name: "list-tree",
	render: (part) => (
		<>
			<motion.path {...part(branch(0.3))} d="M21 12h-8" style={edge(0, 0.5)} />
			<motion.path {...part(branch(0.15))} d="M21 6H8" style={edge(0, 0.5)} />
			<motion.path {...part(branch(0.45))} d="M21 18h-8" style={edge(0, 0.5)} />
			<motion.path {...part(trunk(0))} d="M3 6v4c0 1.1.9 2 2 2h3" />
			<motion.path {...part(trunk(0.15))} d="M3 10v6c0 1.1.9 2 2 2h3" />
		</>
	),
});
