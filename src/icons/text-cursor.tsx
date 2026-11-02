import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const type = pose({ x: [0, 5, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const blink = pose({ opacity: [1, 1, 0.15, 1] }, { duration: 0.7, times: [0, 0.3, 0.42, 0.56] });

export default createAnimatedIcon({
	name: "text-cursor",
	render: (part) => (
		<motion.g {...part(type)}>
			<motion.g {...part(blink)}>
				<path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
				<path d="M7 22h1a4 4 0 0 0 4-4v-1" />
				<path d="M7 2h1a4 4 0 0 1 4 4v1" />
			</motion.g>
		</motion.g>
	),
});
