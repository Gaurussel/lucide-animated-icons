import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.2, 1] }, { duration: 0.45, delay });
const bubble = pose({ scale: [1, 0.92, 1.06, 1] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] });

export default createAnimatedIcon({
	name: "message-square-text",
	render: (part) => (
		<motion.g {...part(bubble)} style={edge(0, 1)}>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.path {...part(line(0.2))} d="M13 8H7" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.35))} d="M17 12H7" style={edge(0, 0.5)} />
		</motion.g>
	),
});
