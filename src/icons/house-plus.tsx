import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] });
const door = pose({ scaleX: [1, 0.15, 0.15, 1] }, { duration: 0.8, times: [0, 0.4, 0.6, 1] });
const plus = pose({ scale: [1, 1, 0.3, 1] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] });
const stroke = (delay: number) =>
	pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, delay, times: [0, 0.4, 0.55, 1] });

export default createAnimatedIcon({
	name: "house-plus",
	render: (part) => (
		<>
			<motion.g {...part(press)} style={edge(0.5, 1)}>
				<motion.path {...part(door)} d="M14.959 12.717A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" style={edge(0, 1)} />
				<path d="M12.662 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v2.475" />
			</motion.g>
			<motion.g {...part(plus)} style={centered}>
				<motion.path {...part(stroke(0))} d="M15 18h6" />
				<motion.path {...part(stroke(0.05))} d="M18 15v6" />
			</motion.g>
		</>
	),
});
