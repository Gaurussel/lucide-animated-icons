import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const charge = pose(
	{ scale: [1, 0.64, 1.18, 1] },
	{ duration: 0.7, times: [0, 0.18, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const kickback = pose(
	{ x: [0, 0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const ray = (x: number, y: number, delay: number) =>
	pose(
		{ x: [0, 0, x, 0], y: [0, 0, y, 0] },
		{ duration: 0.55, delay, times: [0, 0.3, 0.5, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "projector",
	render: (part) => (
		<>
			<motion.g {...part(ray(-1.5, -1.5, 0.12))}>
				<motion.path {...part(redraw(0.2, 0.35))} d="M5 7 3 5" />
			</motion.g>
			<motion.g {...part(ray(0, -2, 0.16))}>
				<motion.path {...part(redraw(0.24, 0.35))} d="M9 6V3" />
			</motion.g>
			<motion.g {...part(ray(1.5, -1.5, 0.2))}>
				<motion.path {...part(redraw(0.28, 0.35))} d="m13 7 2-2" />
			</motion.g>
			<motion.g {...part(kickback)}>
				<motion.circle {...part(charge)} cx="9" cy="13" r="3" style={centered} />
				<path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
				<path d="M16 16h2" />
			</motion.g>
		</>
	),
});
