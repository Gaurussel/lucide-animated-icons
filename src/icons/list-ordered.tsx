import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const mark = (delay: number) => pose({ scale: [1, 2, 1] }, { duration: 0.3, delay });
const write = (delay: number) =>
	pose({ pathLength: [1, 0, 1] }, { duration: 0.45, delay: delay + 0.1, times: [0, 0.35, 1] });

export default createAnimatedIcon({
	name: "list-ordered",
	render: (part) => (
		<>
			<motion.path {...part(write(0.15))} d="M10 12h11" />
			<motion.path {...part(write(0.3))} d="M10 18h11" />
			<motion.path {...part(write(0))} d="M10 6h11" />
			<motion.g {...part(mark(0))} style={centered}>
				<path d="M4 10h2" />
				<path d="M4 6h1v4" />
			</motion.g>
			<motion.path {...part(mark(0.3))} d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" style={centered} />
		</>
	),
});
