import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const jab = pose(
	{ x: [0, 0.6, -1.8, 0], y: [0, -0.6, 1.8, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.32, 1], ease: ["easeInOut", "easeIn", springy] },
);
const plunge = pose(
	{ x: [0, 0, -1.5, 0], y: [0, 0, 1.5, 0] },
	{ duration: 0.7, times: [0, 0.32, 0.5, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "syringe",
	render: (part) => (
		<motion.g {...part(jab)}>
			<motion.g {...part(plunge)}>
				<path d="m18 2 4 4" />
				<path d="m17 7 3-3" />
			</motion.g>
			<path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
			<path d="m9 11 4 4" />
			<path d="m5 19-3 3" />
			<path d="m14 4 6 6" />
		</motion.g>
	),
});
