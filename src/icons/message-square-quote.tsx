import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const quote = (delay: number) => pose({ pathLength: [1, 0, 1] }, { duration: 0.45, delay, times: [0, 0.35, 1] });
const bubble = pose({ scale: [1, 0.92, 1.06, 1] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] });

export default createAnimatedIcon({
	name: "message-square-quote",
	render: (part) => (
		<motion.g {...part(bubble)} style={edge(0, 1)}>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.path {...part(quote(0.2))} d="M8 12a2 2 0 0 0 2-2V8H8" />
			<motion.path {...part(quote(0.35))} d="M14 12a2 2 0 0 0 2-2V8h-2" />
		</motion.g>
	),
});
