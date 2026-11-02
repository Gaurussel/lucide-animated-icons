import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const drive = pose(
	{ x: [0, -2, 14, -12, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "truck-electric",
	render: (part) => (
		<motion.g {...part(drive)}>
			<path d="M14 19V7a2 2 0 0 0-2-2H9" />
			<path d="M15 19H9" />
			<path d="M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" />
			<path d="M2 13v5a1 1 0 0 0 1 1h2" />
			<motion.path
				{...part(redraw(0.3, 0.4))}
				d="M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02"
			/>
			<circle cx="17" cy="19" r="2" />
			<circle cx="7" cy="19" r="2" />
		</motion.g>
	),
});
