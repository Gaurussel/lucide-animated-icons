import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const dot = (delay: number) => pose({ scale: [1, 3, 1] }, { duration: 0.3, delay });
const write = (delay: number) =>
	pose({ pathLength: [1, 0, 1] }, { duration: 0.45, delay: delay + 0.1, times: [0, 0.35, 1] });

export default createAnimatedIcon({
	name: "list",
	render: (part) => (
		<>
			<motion.path {...part(dot(0.15))} d="M3 12h.01" />
			<motion.path {...part(dot(0.3))} d="M3 18h.01" />
			<motion.path {...part(dot(0))} d="M3 6h.01" />
			<motion.path {...part(write(0.15))} d="M8 12h13" />
			<motion.path {...part(write(0.3))} d="M8 18h13" />
			<motion.path {...part(write(0))} d="M8 6h13" />
		</>
	),
});
