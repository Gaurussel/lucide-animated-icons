import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const swipe = pose(
	{ x: [0, 0.9, -5.4, 5.4, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", snap, springy] },
);
const shift = pose(
	{ x: [0, 0, 2.4, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "gallery-horizontal-end",
	render: (part) => (
		<>
			<motion.g {...part(shift)}>
				<path d="M2 7v10" />
				<path d="M6 5v14" />
			</motion.g>
			<motion.rect {...part(swipe)} height="18" rx="2" width="12" x="10" y="3" />
		</>
	),
});
