import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const fly = pose(
	{ x: [0, -3.6, 3.6, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.28, 0.29, 1], ease: ["easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "pilcrow-left",
	render: (part) => (
		<>
			<path d="M14 3v11" />
			<motion.path {...part(redraw(0.1, 0.5))} d="M14 9h-3a3 3 0 0 1 0-6h9" />
			<path d="M18 3v11" />
			<motion.g {...part(fly)}>
				<path d="M22 18H2l4-4" />
				<path d="m6 22-4-4" />
			</motion.g>
		</>
	),
});
