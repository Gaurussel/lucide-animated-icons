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
	name: "image-off",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(3, 21)}>
			<motion.line {...part(redraw(0.15, 0.55))} x1="2" x2="22" y1="2" y2="22" />
			<motion.path {...part(sun)} d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
			<line x1="13.5" x2="6" y1="13.5" y2="21" />
			<line x1="18" x2="21" y1="12" y2="15" />
			<path d="M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" />
			<path d="M21 15V5a2 2 0 0 0-2-2H9" />
		</motion.g>
	),
});
