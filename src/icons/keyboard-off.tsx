import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const press = (delay: number) => pose({ y: [0, 1.5, 0] }, { duration: 0.25, delay, times: [0, 0.5, 1] });
const slash = pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.85, times: [0, 0.45, 0.6, 1] });
const body = pose({ scale: [1, 0.9, 1, 0.94, 1] }, { duration: 0.85, times: [0, 0.2, 0.4, 0.7, 1] });

export default createAnimatedIcon({
	name: "keyboard-off",
	render: (part) => (
		<>
			<motion.g {...part(body)} style={centered}>
				<path d="M 20 4 A2 2 0 0 1 22 6" />
				<path d="M 22 6 L 22 16.41" />
				<path d="M 9.69 4 L 20 4" />
				<path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" />
				<motion.path {...part(press(0))} d="M6 8h.01" />
				<motion.path {...part(press(0.08))} d="M14 8h.01" />
				<motion.path {...part(press(0.16))} d="M18 8h.01" />
				<motion.path {...part(press(0.24))} d="M8 12h.01" />
				<motion.path {...part(press(0.32))} d="M 7 16 L 16 16" />
			</motion.g>
			<motion.path {...part(slash)} d="m2 2 20 20" />
		</>
	),
});
