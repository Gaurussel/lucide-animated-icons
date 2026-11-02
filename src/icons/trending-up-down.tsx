import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const shoot = (y: number, delay: number) =>
	pose({ x: [0, 3, 0], y: [0, y, 0] }, { duration: 0.65, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "trending-up-down",
	render: (part) => (
		<>
			<motion.g {...part(shoot(-3, 0))}>
				<path d="m21 3-9 9-4-4-6 6" />
				<path d="M21 8V3h-5" />
			</motion.g>
			<motion.g {...part(shoot(3, 0.1))}>
				<path d="M14.828 14.828 21 21" />
				<path d="M21 16v5h-5" />
			</motion.g>
		</>
	),
});
