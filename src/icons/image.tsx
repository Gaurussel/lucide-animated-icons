import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const sun = pose(
	{ y: [0, 1.2, -2.1, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

const tilt = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "image",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(3, 21)}>
			<rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
			<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
			<motion.path {...part(redraw(0.05, 0.55))} d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
		</motion.g>
	),
});
