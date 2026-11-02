import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const node = (delay: number) => pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, delay, times: [0, 0.25, 0.55, 1] });
const trace = (delay: number) =>
	pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay, times: [0, 0.25, 0.4, 1] });
const badge = (delay: number) =>
	pose({ scale: [1, 0, 0, 1], rotate: [0, -90, -90, 0] }, { duration: 0.8, delay, times: [0, 0.25, 0.55, 1] });

export default createAnimatedIcon({
	name: "git-branch-plus",
	render: (part) => (
		<>
			<motion.path {...part(trace(0))} d="M6 3v12" />
			<motion.path {...part(node(0.25))} d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" style={centered} />
			<motion.path {...part(node(0))} d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" style={centered} />
			<motion.path {...part(trace(0.1))} d="M15 6a9 9 0 0 0-9 9" />
			<motion.g {...part(badge(0.1))} style={centered}>
				<path d="M18 15v6" />
				<path d="M21 18h-6" />
			</motion.g>
		</>
	),
});
