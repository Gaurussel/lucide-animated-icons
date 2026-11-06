import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const fly = pose(
	{ x: [0, 3.6, -3.6, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.28, 0.29, 1], ease: ["easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "pilcrow-right",
	render: (part) => (
		<>
			<path d="M10 3v11" />
			<motion.path {...part(redraw(0.1, 0.5))} d="M10 9H7a1 1 0 0 1 0-6h8" />
			<path d="M14 3v11" />
			<motion.g {...part(fly)}>
				<path d="m18 14 4 4H2" />
				<path d="m22 18-4 4" />
			</motion.g>
		</>
	),
});
