import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const bumped = pose(
	{ x: [0, 0, -1.5, 0] },
	{ duration: 0.75, times: [0, 0.35, 0.48, 1], ease: ["easeInOut", snap, springy] },
);
const arrive = pose(
	{ x: [0, 0, 2.4, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.65, delay: 0.1, times: [0, 0.05, 0.3, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "check-check",
	render: (part) => (
		<>
			<motion.g {...part(bumped)}>
				<motion.path {...part(redraw(0, 0.35))} d="M18 6 7 17l-5-5" />
			</motion.g>
			<motion.g {...part(arrive)}>
				<motion.path {...part(redraw(0.25, 0.35))} d="m22 10-7.5 7.5L13 16" />
			</motion.g>
		</>
	),
});
