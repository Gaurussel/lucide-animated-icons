import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, springy } from "../helpers.ts";

const rise = (y: number, delay: number) =>
	pose(
		{ y: [0, y, 0], scale: [1, 1.12, 1] },
		{ duration: 0.65, delay, times: [0, 0.3, 1], ease: ["easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "bubbles",
	render: (part) => (
		<>
			<motion.g {...part(rise(-3, 0))} style={centered}>
				<path d="M7.2 14.8a2 2 0 0 1 2 2" />
				<circle cx="7.5" cy="16.5" r="5.5" />
			</motion.g>
			<motion.circle {...part(rise(-4, 0.08))} cx="18.5" cy="8.5" r="3.5" style={centered} />
			<motion.circle {...part(rise(-3, 0.14))} cx="7.5" cy="4.5" r="2.5" style={centered} />
		</>
	),
});
