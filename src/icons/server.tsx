import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const pull = (delay: number) =>
	pose({ x: [0, 3, 0] }, { duration: 0.62, delay, times: [0, 0.28, 1], ease: [snap, springy] });
const blink = (delay: number) =>
	pose({ scale: [1, 1.9, 1] }, { duration: 0.5, delay: delay + 0.15, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "server",
	render: (part) => (
		<>
			<motion.g {...part(pull(0))}>
				<rect height="8" rx="2" ry="2" width="20" x="2" y="2" />
				<motion.line {...part(blink(0))} style={centered} x1="6" x2="6.01" y1="6" y2="6" />
			</motion.g>
			<motion.g {...part(pull(0.1))}>
				<rect height="8" rx="2" ry="2" width="20" x="2" y="14" />
				<motion.line {...part(blink(0.1))} style={centered} x1="6" x2="6.01" y1="18" y2="18" />
			</motion.g>
		</>
	),
});
