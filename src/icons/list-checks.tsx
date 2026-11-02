import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const check = (delay: number) =>
	pose({ pathLength: [1, 0, 1], scale: [1, 1.8, 1] }, { duration: 0.4, delay, times: [0, 0.35, 1] });
const line = (delay: number) => pose({ scaleX: [1, 0.15, 1], x: [0, 5, 0] }, { duration: 0.4, delay });

export default createAnimatedIcon({
	name: "list-checks",
	render: (part) => (
		<>
			<motion.path {...part(check(0.25))} d="m3 17 2 2 4-4" style={centered} />
			<motion.path {...part(check(0))} d="m3 7 2 2 4-4" style={centered} />
			<motion.path {...part(line(0.08))} d="M13 6h8" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.16))} d="M13 12h8" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.3))} d="M13 18h8" style={edge(0, 0.5)} />
		</>
	),
});
