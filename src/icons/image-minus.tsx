import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const sun = pose(
	{ y: [0, 2, -3.5, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const toss = pose(
	{ x: [0, -1.5, 6, -4, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", snap, springy] },
);

const tilt = pose(
	{ y: [0, -3, 0], rotate: [0, -10, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "image-minus",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(3, 21)}>
			<path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
			<motion.line {...part(toss)} x1="16" x2="22" y1="5" y2="5" />
			<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
			<motion.path {...part(redraw(0.05, 0.55))} d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
		</motion.g>
	),
});
