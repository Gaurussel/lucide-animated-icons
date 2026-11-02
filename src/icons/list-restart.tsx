import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.5, 1] }, { duration: 0.45, delay });
const turn = pose({ rotate: [0, 20, -360] }, { duration: 0.8, times: [0, 0.15, 1], reset: true });

export default createAnimatedIcon({
	name: "list-restart",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M21 6H3" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.12))} d="M7 12H3" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.24))} d="M7 18H3" style={edge(0, 0.5)} />
			<motion.g {...part(turn)} style={pivot(16.5, 15)}>
				<path d="M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" />
				<path d="M11 10v4h4" />
			</motion.g>
		</>
	),
});
