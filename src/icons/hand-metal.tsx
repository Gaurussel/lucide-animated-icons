import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.15, 0.4, 0.65, 1] };
const horn = (delay: number) => pose({ rotate: [0, 0, -8, 6, 0] }, { ...phase, delay });

export default createAnimatedIcon({
	name: "hand-metal",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -1, 0, 0, 0], rotate: [0, 0, -10, 10, 0] }, phase))} style={edge(0.5, 1)}>
			<path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
			<path d="M14 11V9a2 2 0 1 0-4 0v2" />
			<motion.path {...part(horn(0))} d="M10 10.5V5a2 2 0 1 0-4 0v9" style={edge(0.5, 1)} />
			<path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
		</motion.g>
	),
});
