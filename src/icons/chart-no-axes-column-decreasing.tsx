import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const land = (delay: number) =>
	pose(
		{ y: [0, 0, -3, 0], scaleX: [1, 1, 1.24, 1] },
		{ duration: 0.7, delay, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "chart-no-axes-column-decreasing",
	render: (part) => (
		<>
			<motion.g {...part(land(0.08))}>
				<motion.path {...part(redraw(0.08, 0.3))} d="M12 20V10" />
			</motion.g>
			<motion.g {...part(land(0.16))}>
				<motion.path {...part(redraw(0.16, 0.3))} d="M18 20v-4" />
			</motion.g>
			<motion.g {...part(land(0))}>
				<motion.path {...part(redraw(0, 0.3))} d="M6 20V4" />
			</motion.g>
		</>
	),
});
