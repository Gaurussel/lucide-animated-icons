import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const key = (delay: number) =>
	pose({ y: [0, -5, 0] }, { duration: 0.42, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "barcode",
	render: (part) => (
		<>
			<motion.g {...part(key(0))}>
				<motion.path {...part(redraw(0, 0.4))} d="M3 5v14" />
			</motion.g>
			<motion.g {...part(key(0.07))}>
				<motion.path {...part(redraw(0.07, 0.4))} d="M8 5v14" />
			</motion.g>
			<motion.g {...part(key(0.14))}>
				<motion.path {...part(redraw(0.14, 0.4))} d="M12 5v14" />
			</motion.g>
			<motion.g {...part(key(0.21))}>
				<motion.path {...part(redraw(0.21, 0.4))} d="M17 5v14" />
			</motion.g>
			<motion.g {...part(key(0.28))}>
				<motion.path {...part(redraw(0.28, 0.4))} d="M21 5v14" />
			</motion.g>
		</>
	),
});
