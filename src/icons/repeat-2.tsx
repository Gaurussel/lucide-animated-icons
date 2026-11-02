import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const shuttle = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "repeat-2",
	render: (part) => (
		<>
			<motion.g {...part(shuttle(0, -3))}>
				<path d="m2 9 3-3 3 3" />
				<path d="M13 18H7a2 2 0 0 1-2-2V6" />
			</motion.g>
			<motion.g {...part(shuttle(0, 3))}>
				<path d="m22 15-3 3-3-3" />
				<path d="M11 6h6a2 2 0 0 1 2 2v10" />
			</motion.g>
		</>
	),
});
