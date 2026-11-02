import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const bar = (delay: number) => pose({ scaleX: [1, 0.05, 1] }, { duration: 0.5, delay, times: [0, 0.45, 1] });
const stroke = (delay: number) => pose({ pathLength: [1, 0, 1] }, { duration: 0.45, delay, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "indian-rupee",
	render: (part) => (
		<>
			<motion.path {...part(bar(0))} d="M6 3h12" style={edge(0, 0.5)} />
			<motion.path {...part(bar(0.06))} d="M6 8h12" style={edge(0, 0.5)} />
			<motion.path {...part(stroke(0.12))} d="M6 13h3" />
			<motion.path {...part(stroke(0.18))} d="M9 13c6.667 0 6.667-10 0-10" />
			<motion.path {...part(stroke(0.24))} d="m6 13 8.5 8" />
		</>
	),
});
