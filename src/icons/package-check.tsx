import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, 0.9, -3, 0, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.32, 0.48, 1], ease: ["easeInOut", "easeOut", "easeIn", "easeInOut"] },
);
const stamp = pose(
	{ scale: [1, 1, 1.3, 1], rotate: [0, 0, -9, 0] },
	{ duration: 0.7, times: [0, 0.46, 0.58, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "package-check",
	render: (part) => (
		<>
			<motion.g {...part(leap)}>
				<motion.g {...part(jelly(0.48, 0.7))} style={edge(0.5, 1)}>
					<path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
					<path d="m7.5 4.27 9 5.15" />
					<polyline points="3.29 7 12 12 20.71 7" />
					<line x1="12" x2="12" y1="22" y2="12" />
				</motion.g>
			</motion.g>
			<motion.g {...part(stamp)} style={pivot(19, 16)}>
				<motion.path {...part(redraw(0.4, 0.28))} d="m16 16 2 2 4-4" />
			</motion.g>
		</>
	),
});
