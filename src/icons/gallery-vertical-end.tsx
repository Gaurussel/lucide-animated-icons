import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const swipe = pose(
	{ y: [0, 1.5, -9, 9, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", snap, springy] },
);
const shift = pose({ y: [0, 0, 4, 0] }, { duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] });

export default createAnimatedIcon({
	name: "gallery-vertical-end",
	render: (part) => (
		<>
			<motion.g {...part(shift)}>
				<path d="M7 2h10" />
				<path d="M5 6h14" />
			</motion.g>
			<motion.rect {...part(swipe)} height="12" rx="2" width="18" x="3" y="10" />
		</>
	),
});
