import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const steam = (delay: number) =>
	pose({ y: [0, 0, -4, -4, 0], opacity: [1, 1, 0, 0, 1] }, { duration: 0.85, delay, times: [0, 0.3, 0.65, 0.66, 1] });
const dot = (delay: number) =>
	pose({ scale: [1, 2.5, 1, 2.5, 1] }, { duration: 0.85, delay, times: [0, 0.2, 0.4, 0.6, 1] });
const fin = (delay: number) => pose({ scaleY: [1, 0.15, 1, 1] }, { duration: 0.85, delay, times: [0, 0.2, 0.4, 1] });

export default createAnimatedIcon({
	name: "heater",
	render: (part) => (
		<>
			<motion.path {...part(steam(0.05))} d="M11 8c2-3-2-3 0-6" />
			<motion.path {...part(steam(0.15))} d="M15.5 8c2-3-2-3 0-6" />
			<motion.g {...part(pose({ y: [0, 1, -1.5, -1.5, 0] }, { duration: 0.85, times: [0, 0.15, 0.4, 0.7, 1] }))}>
				<motion.path {...part(dot(0))} d="M6 10h.01" style={centered} />
				<motion.path {...part(dot(0.1))} d="M6 14h.01" style={centered} />
				<motion.path {...part(fin(0))} d="M10 16v-4" style={centered} />
				<motion.path {...part(fin(0.08))} d="M14 16v-4" style={centered} />
				<motion.path {...part(fin(0.16))} d="M18 16v-4" style={centered} />
				<path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
				<path d="M5 20v2" />
				<path d="M19 20v2" />
			</motion.g>
		</>
	),
});
