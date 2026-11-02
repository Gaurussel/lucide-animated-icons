import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const corner = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "maximize-2",
	render: (part) => (
		<>
			<motion.g {...part(corner(3, -3))}>
				<path d="M15 3h6v6" />
				<path d="m21 3-7 7" />
			</motion.g>
			<motion.g {...part(corner(-3, 3))}>
				<path d="m3 21 7-7" />
				<path d="M9 21H3v-6" />
			</motion.g>
		</>
	),
});
