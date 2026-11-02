import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.15, 0.4, 0.65, 1] };
const finger = (delay: number) => pose({ rotate: [0, 0, -8, 6, 0] }, { ...phase, delay });

export default createAnimatedIcon({
	name: "hand",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -1, 0, 0, 0], rotate: [0, 0, -12, 10, 0] }, phase))} style={edge(0.5, 1)}>
			<motion.path {...part(finger(0.1))} d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" style={edge(0.5, 1)} />
			<motion.path {...part(finger(0.05))} d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" style={edge(0.5, 1)} />
			<motion.path {...part(finger(0))} d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" style={edge(0.5, 1)} />
			<path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
		</motion.g>
	),
});
