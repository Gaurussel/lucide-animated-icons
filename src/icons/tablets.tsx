import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const roll = (direction: number, delay: number) =>
	pose(
		{ rotate: [0, 3.62, 0], x: [0, 3 * direction, 0], y: [0, 3 * direction, 0] },
		{ duration: 0.65, delay, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
	);

export default createAnimatedIcon({
	name: "tablets",
	render: (part) => (
		<>
			<motion.g {...part(roll(-1, 0))} style={pivot(7, 7)}>
				<circle cx="7" cy="7" r="5" />
				<path d="m3.46 10.54 7.08-7.08" />
			</motion.g>
			<motion.g {...part(roll(1, 0.08))} style={pivot(17, 17)}>
				<circle cx="17" cy="17" r="5" />
				<path d="M12 17h10" />
			</motion.g>
		</>
	),
});
