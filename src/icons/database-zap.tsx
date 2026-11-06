import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring, snap, springy } from "../helpers.ts";

const rumble = pose({ x: [0, -1.2, 0] }, { duration: 0.7, times: [0, 0.1, 1], ease: ["easeInOut", ring] });
const strike = pose({ y: [0, 1.8, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "database-zap",
	render: (part) => (
		<>
			<motion.g {...part(rumble)}>
				<ellipse cx="12" cy="5" rx="9" ry="3" />
				<path d="M3 5V19A9 3 0 0 0 15 21.84" />
				<path d="M21 5V8" />
				<path d="M3 12A9 3 0 0 0 14.59 14.87" />
			</motion.g>
			<motion.g {...part(strike)}>
				<motion.path {...part(redraw(0, 0.35))} d="M21 12L18 17H22L19 22" />
			</motion.g>
		</>
	),
});
