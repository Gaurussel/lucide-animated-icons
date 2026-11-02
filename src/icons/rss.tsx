import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const charge = pose(
	{ scale: [1, 0.4, 2, 1], x: [0, 0, -1, 0], y: [0, 0, 1, 0] },
	{ duration: 0.65, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const wave = (delay: number) =>
	pose({ x: [0, 2, 0], y: [0, -2, 0] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "rss",
	render: (part) => (
		<>
			<motion.g {...part(wave(0.15))}>
				<motion.path {...part(redraw(0.15, 0.3))} d="M4 11a9 9 0 0 1 9 9" />
			</motion.g>
			<motion.g {...part(wave(0.25))}>
				<motion.path {...part(redraw(0.25, 0.3))} d="M4 4a16 16 0 0 1 16 16" />
			</motion.g>
			<motion.circle {...part(charge)} cx="5" cy="19" r="1" style={centered} />
		</>
	),
});
