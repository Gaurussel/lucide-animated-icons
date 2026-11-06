import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const sail = pose(
	{ x: [0, -2, 12, -10, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.36, 0.37, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const puff = pose(
	{ y: [0, 0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.37, 0.55, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "cloud",
	render: (part) => (
		<motion.g {...part(sail)}>
			<motion.g {...part(puff)}>
				<motion.path {...part(redraw(0.26, 0.42))} d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
			</motion.g>
		</motion.g>
	),
});
