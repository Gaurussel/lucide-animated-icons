import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const out = (dx: number, dy: number) =>
	pose({ x: [0, -dx / 3, dx, 0], y: [0, -dy / 3, dy, 0] }, { duration: 0.65, times: [0, 0.2, 0.55, 1] });

export default createAnimatedIcon({
	name: "expand",
	render: (part) => (
		<>
			<motion.g {...part(out(2, 2))}>
				<path d="m15 15 6 6" />
				<path d="M21 16v5h-5" />
			</motion.g>
			<motion.g {...part(out(2, -2))}>
				<path d="m15 9 6-6" />
				<path d="M21 8V3h-5" />
			</motion.g>
			<motion.g {...part(out(-2, 2))}>
				<path d="M3 16v5h5" />
				<path d="m3 21 6-6" />
			</motion.g>
			<motion.g {...part(out(-2, -2))}>
				<path d="M3 8V3h5" />
				<path d="M9 9 3 3" />
			</motion.g>
		</>
	),
});
