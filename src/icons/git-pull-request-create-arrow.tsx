import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const node = (delay: number) => pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, delay, times: [0, 0.25, 0.55, 1] });
const trace = (delay: number) =>
	pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay, times: [0, 0.25, 0.4, 1] });
const badge = (delay: number) =>
	pose({ scale: [1, 0, 0, 1], rotate: [0, -90, -90, 0] }, { duration: 0.8, delay, times: [0, 0.25, 0.55, 1] });
const arrow = pose({ x: [0, 1, -2.5, -2.5, 0] }, { duration: 0.8, delay: 0.1, times: [0, 0.2, 0.5, 0.7, 1] });

export default createAnimatedIcon({
	name: "git-pull-request-create-arrow",
	render: (part) => (
		<>
			<motion.circle {...part(node(0))} cx="5" cy="6" r="3" style={centered} />
			<motion.path {...part(trace(0.05))} d="M5 9v12" />
			<motion.path {...part(arrow)} d="m15 9-3-3 3-3" />
			<motion.path {...part(trace(0.2))} d="M12 6h5a2 2 0 0 1 2 2v3" />
			<motion.g {...part(badge(0.15))} style={centered}>
				<path d="M19 15v6" />
				<path d="M22 18h-6" />
			</motion.g>
		</>
	),
});
