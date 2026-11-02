import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const swipe = pose(
	{ x: [0, 1.5, -9, 9, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", snap, springy] },
);
const scroll = pose(
	{ x: [0, 0, -5, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "gallery-thumbnails",
	render: (part) => (
		<>
			<motion.rect {...part(swipe)} height="14" rx="2" width="18" x="3" y="3" />
			<motion.g {...part(scroll)}>
				<path d="M4 21h1" />
				<path d="M9 21h1" />
				<path d="M14 21h1" />
				<path d="M19 21h1" />
			</motion.g>
		</>
	),
});
