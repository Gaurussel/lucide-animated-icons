import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const stamp = pose({ scale: [1, 0.85, 1] }, { duration: 0.6, times: [0, 0.2, 1], ease: [snap, springy] });
const tick = (delay: number) =>
	pose({ y: [0, -3, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "app-window-mac",
	render: (part) => (
		<motion.g {...part(stamp)} style={centered}>
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<motion.path {...part(tick(0.1))} d="M6 8h.01" />
			<motion.path {...part(tick(0.16))} d="M10 8h.01" />
			<motion.path {...part(tick(0.22))} d="M14 8h.01" />
		</motion.g>
	),
});
