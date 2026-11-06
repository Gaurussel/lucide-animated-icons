import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const stamp = pose(
	{ rotate: [0, 3.62, 0] },
	{ duration: 0.55, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const press = pose(
	{ scale: [1, 1, 1.18, 1] },
	{ duration: 0.72, times: [0, 0.55, 0.66, 1], ease: ["easeInOut", snap, springy] },
);
const land = pose(
	{ y: [0, -1.8, 0.48, 0], scale: [1, 1.06, 0.93, 1] },
	{ duration: 0.72, times: [0, 0.25, 0.42, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "badge-check",
	render: (part) => (
		<motion.g {...part(land)} style={centered}>
			<motion.path
				{...part(stamp)}
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
				style={centered}
			/>
			<motion.g {...part(press)} style={centered}>
				<motion.path {...part(redraw(0.22, 0.35))} d="m9 12 2 2 4-4" />
			</motion.g>
		</motion.g>
	),
});
