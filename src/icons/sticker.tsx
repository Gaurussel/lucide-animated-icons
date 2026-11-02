import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const peel = pose(
	{ rotate: [0, -12, 0], y: [0, -2, 0] },
	{ duration: 0.72, times: [0, 0.22, 1], ease: [snap, springy] },
);
const corner = pose(
	{ x: [0, -2, 0], y: [0, 2, 0] },
	{ duration: 0.65, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] },
);
const blink = (delay: number) =>
	pose({ y: [0, -1.5, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "sticker",
	render: (part) => (
		<motion.g {...part(peel)} style={pivot(5, 21)}>
			<path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
			<motion.path {...part(corner)} d="M14 3v4a2 2 0 0 0 2 2h4" />
			<motion.path {...part(blink(0.1))} d="M8 13h.01" />
			<motion.path {...part(blink(0.16))} d="M16 13h.01" />
			<motion.path {...part(redraw(0.1, 0.4))} d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
		</motion.g>
	),
});
