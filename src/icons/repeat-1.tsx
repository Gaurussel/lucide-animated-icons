import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap } from "../helpers.ts";

const shuttle = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "repeat-1",
	render: (part) => (
		<>
			<motion.g {...part(shuttle(3, 0))}>
				<path d="m17 2 4 4-4 4" />
				<path d="M3 11v-1a4 4 0 0 1 4-4h14" />
			</motion.g>
			<motion.g {...part(shuttle(-3, 0))}>
				<path d="m7 22-4-4 4-4" />
				<path d="M21 13v1a4 4 0 0 1-4 4H3" />
			</motion.g>
			<motion.path {...part(redraw(0.2, 0.45))} d="M11 10h1v4" />
		</>
	),
});
