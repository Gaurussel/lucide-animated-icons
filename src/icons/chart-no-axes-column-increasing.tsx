import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const land = (delay: number) =>
	pose(
		{ y: [0, 0, -3, 0], scaleX: [1, 1, 1.24, 1] },
		{ duration: 0.7, delay, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "chart-no-axes-column-increasing",
	render: (part) => (
		<>
			<motion.g {...part(land(0.08))}>
				<motion.line {...part(redraw(0.08, 0.3))} x1="12" x2="12" y1="20" y2="10" />
			</motion.g>
			<motion.g {...part(land(0.16))}>
				<motion.line {...part(redraw(0.16, 0.3))} x1="18" x2="18" y1="20" y2="4" />
			</motion.g>
			<motion.g {...part(land(0))}>
				<motion.line {...part(redraw(0, 0.3))} x1="6" x2="6" y1="20" y2="16" />
			</motion.g>
		</>
	),
});
