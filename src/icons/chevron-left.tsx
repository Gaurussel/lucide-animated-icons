import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const dash = (x: number, y: number) =>
	pose(
		{ x: [0, -x * 0.25, x, -x, 0], y: [0, -y * 0.25, y, -y, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.7, times: [0, 0.15, 0.32, 0.33, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "chevron-left",
	render: (part) => (
		<motion.g {...part(dash(-8, 0))}>
			<motion.path {...part(redraw(0.24, 0.45))} d="m15 18-6-6 6-6" />
		</motion.g>
	),
});
