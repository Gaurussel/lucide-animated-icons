import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap } from "../helpers.ts";

const drag = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "text-select",
	render: (part) => (
		<>
			<path d="M5 3a2 2 0 0 0-2 2" />
			<motion.g {...part(drag(0.8, 0))}>
				<path d="M9 3h1" />
				<path d="M9 21h1" />
			</motion.g>
			<motion.g {...part(drag(1.6, 0))}>
				<path d="M14 3h1" />
				<path d="M14 21h1" />
			</motion.g>
			<motion.g {...part(drag(0, 1))}>
				<path d="M3 9v1" />
				<path d="M21 9v1" />
			</motion.g>
			<motion.g {...part(drag(0, 2))}>
				<path d="M3 14v1" />
				<path d="M21 14v1" />
			</motion.g>
			<motion.path {...part(drag(2.5, 0))} d="M19 3a2 2 0 0 1 2 2" />
			<motion.path {...part(drag(0, 2.5))} d="M5 21a2 2 0 0 1-2-2" />
			<motion.path {...part(drag(2.5, 2.5))} d="M21 19a2 2 0 0 1-2 2" />
			<motion.path {...part(redraw(0.1, 0.4))} d="M7 8h8" />
			<motion.path {...part(redraw(0.18, 0.4))} d="M7 12h10" />
			<motion.path {...part(redraw(0.26, 0.4))} d="M7 16h6" />
		</>
	),
});
