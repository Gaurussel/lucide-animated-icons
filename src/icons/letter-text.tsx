import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const letter = pose({ scale: [1, 1.45, 1] }, { duration: 0.4, times: [0, 0.45, 1] });
const bar = pose({ scaleX: [1, 0.2, 1] }, { duration: 0.35, delay: 0.15, times: [0, 0.5, 1] });
const line = (delay: number) => pose({ scaleX: [1, 0.05, 1] }, { duration: 0.35, delay, times: [0, 0.5, 1] });
const rule = pose({ pathLength: [1, 0, 1] }, { duration: 0.45, delay: 0.3, times: [0, 0.35, 1] });

export default createAnimatedIcon({
	name: "letter-text",
	render: (part) => (
		<>
			<motion.path {...part(letter)} d="m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" style={centered} />
			<motion.path {...part(bar)} d="M3.92 11h6.16" style={centered} />
			<motion.path {...part(line(0.15))} d="M15 6h6" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.22))} d="M15 12h6" style={edge(0, 0.5)} />
			<motion.path {...part(rule)} d="M3 18h18" />
		</>
	),
});
