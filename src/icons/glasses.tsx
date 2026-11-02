import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const lift = pose({ y: [0, -3, -3, 0], rotate: [0, -5, -5, 0] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] });
const shine = (delay: number) => pose({ scale: [1, 1, 1.12, 1] }, { duration: 0.8, delay, times: [0, 0.45, 0.7, 1] });

export default createAnimatedIcon({
	name: "glasses",
	render: (part) => (
		<motion.g {...part(lift)} style={centered}>
			<motion.circle {...part(shine(0))} cx="6" cy="15" r="4" style={centered} />
			<motion.circle {...part(shine(0.08))} cx="18" cy="15" r="4" style={centered} />
			<path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
			<path d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" />
			<path d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" />
		</motion.g>
	),
});
