import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const roll = (x: number) =>
	pose(
		{ x: [0, -x * 0.5, x, 0], rotate: [0, -60, 200, 360] },
		{ duration: 0.75, times: [0, 0.18, 0.42, 1], ease: ["easeInOut", "easeInOut", springy], reset: true },
	);

export default createAnimatedIcon({
	name: "circle-small",
	render: (part) => (
		<motion.g {...part(roll(5))} style={pivot(12, 12)}>
			<motion.circle {...part(redraw(0.05, 0.55))} cx="12" cy="12" r="6" />
		</motion.g>
	),
});
