import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.25, 0.5, 0.75, 1] };
const curl = (delay: number) => pose({ y: [0, 0, 2.5, 2.5, 0] }, { ...phase, delay });

export default createAnimatedIcon({
	name: "grab",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -1.5, -1.5, -1.5, 0] }, phase))}>
			<motion.path {...part(curl(0.1))} d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
			<motion.path {...part(curl(0.05))} d="M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
			<motion.path {...part(curl(0))} d="M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" />
			<path d="M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
			<path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" />
		</motion.g>
	),
});
