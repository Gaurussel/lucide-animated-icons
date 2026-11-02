import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dip = pose(
	{ y: [0, 0, 2, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.25, 1], ease: ["easeInOut", snap, springy] },
);
const pillow = pose(
	{ y: [0, 1, -3, 0] },
	{ duration: 0.72, times: [0, 0.18, 0.36, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "bed-single",
	render: (part) => (
		<>
			<motion.g {...part(dip)}>
				<path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" />
				<path d="M3 18h18" />
			</motion.g>
			<motion.g {...part(pillow)}>
				<path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
			</motion.g>
		</>
	),
});
