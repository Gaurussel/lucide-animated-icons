import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const ripple = (at: number) =>
	pose({ rotate: [0, 0, -14, 0] }, { duration: 0.72, times: [0, at, at + 0.12, 1], ease: ["easeInOut", snap, ring] });
const sway = pose(
	{ rotate: [0, 4, -10, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.26, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "wheat",
	render: (part) => (
		<motion.g {...part(sway)} style={pivot(2, 22)}>
			<path d="M2 22 16 8" />
			<motion.g {...part(ripple(0.14))} style={pivot(5, 19)}>
				<path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
				<path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
			</motion.g>
			<motion.g {...part(ripple(0.2))} style={pivot(9, 15)}>
				<path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
				<path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
			</motion.g>
			<motion.g {...part(ripple(0.26))} style={pivot(13, 11)}>
				<path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
				<path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
			</motion.g>
			<motion.path {...part(ripple(0.32))} d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" style={pivot(16, 8)} />
		</motion.g>
	),
});
