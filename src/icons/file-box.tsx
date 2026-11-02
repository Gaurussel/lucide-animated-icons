import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 0, -5, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const boxJump = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 0, -15, 0] },
	{ duration: 0.75, delay: 0.08, times: [0, 0.1, 0.3, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "file-box",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
			<motion.g {...part(boxJump)} style={pivot(7, 22)}>
				<path d="M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z" />
				<motion.path {...part(redraw(0.32, 0.3))} d="M7 17v5" />
				<motion.path {...part(redraw(0.28, 0.35))} d="M11.7 14.2 7 17l-4.7-2.8" />
			</motion.g>
		</motion.g>
	),
});
