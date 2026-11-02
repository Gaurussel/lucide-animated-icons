import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] });
const door = pose({ scaleX: [1, 0.15, 0.15, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] });

export default createAnimatedIcon({
	name: "house",
	render: (part) => (
		<motion.g {...part(press)} style={edge(0.5, 1)}>
			<motion.path {...part(door)} d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" style={edge(0, 1)} />
			<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
		</motion.g>
	),
});
