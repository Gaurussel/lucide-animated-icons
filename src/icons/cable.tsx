import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const plug = (y: number, degrees: number, delay: number) =>
	pose(
		{ y: [0, -y * 0.3, y, 0], rotate: [0, 0, degrees, 0] },
		{ duration: 0.7, delay, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
	);
const zap = pose({ x: [0, 0, 0.9, 0] }, { duration: 0.7, times: [0, 0.35, 0.45, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "cable",
	render: (part) => (
		<>
			<motion.g {...part(plug(4, 12, 0.1))} style={pivot(19, 21)}>
				<path d="M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1" />
				<path d="M21 21v-2h-4" />
			</motion.g>
			<motion.g {...part(zap)}>
				<motion.path {...part(redraw(0.2, 0.45))} d="M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" />
			</motion.g>
			<motion.g {...part(plug(-4, -12, 0))} style={pivot(5, 3)}>
				<path d="M3 5h4V3" />
				<path d="M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3" />
			</motion.g>
		</>
	),
});
