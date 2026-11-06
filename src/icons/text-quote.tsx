import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const indent = pose({ x: [0, 2.4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "text-quote",
	render: (part) => (
		<>
			<path d="M17 6H3" />
			<motion.g {...part(indent)}>
				<path d="M21 12H8" />
				<path d="M21 18H8" />
				<motion.path {...part(redraw(0.1, 0.55))} d="M3 12v6" />
			</motion.g>
		</>
	),
});
