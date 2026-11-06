import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const write = pose(
	{ x: [0, -1.2, 1.2, -0.6, 0], y: [0, -0.6, 0.6, 0, 0], rotate: [0, -7.2, 4.8, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "feather",
	render: (part) => (
		<>
			<motion.g {...part(write)} style={pivot(2, 22)}>
				<path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
				<path d="M17.5 15H9" />
			</motion.g>
			<motion.path {...part(redraw(0.05, 0.5))} d="M16 8 2 22" />
		</>
	),
});
