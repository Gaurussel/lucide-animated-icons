import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const stamp = pose({ scale: [1, 0.91, 1] }, { duration: 0.6, times: [0, 0.2, 1], ease: [snap, springy] });
const tick = (delay: number) =>
	pose({ y: [0, -1.8, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "app-window",
	render: (part) => (
		<>
			<motion.g {...part(stamp)} style={centered}>
				<rect height="16" rx="2" width="20" x="2" y="4" />
				<path d="M2 8h20" />
			</motion.g>
			<motion.path {...part(tick(0.1))} d="M6 4v4" />
			<motion.path {...part(tick(0.18))} d="M10 4v4" />
		</>
	),
});
