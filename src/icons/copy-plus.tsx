import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const stamp = pose({ scale: [1, 0.85, 1] }, { duration: 0.65, times: [0, 0.15, 1], ease: [snap, springy] });
const slide = pose({ x: [0, -3, 0], y: [0, -3, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });
const twist = pose(
	{ rotate: [0, 0, 360], scale: [1, 0.6, 1] },
	{ duration: 0.65, times: [0, 0.15, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "copy-plus",
	render: (part) => (
		<>
			<motion.g {...part(stamp)} style={centered}>
				<rect height="14" rx="2" ry="2" width="14" x="8" y="8" />
				<motion.g {...part(twist)} style={pivot(15, 15)}>
					<line x1="15" x2="15" y1="12" y2="18" />
					<line x1="12" x2="18" y1="15" y2="15" />
				</motion.g>
			</motion.g>
			<motion.g {...part(slide)}>
				<motion.path {...part(redraw(0, 0.38))} d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
			</motion.g>
		</>
	),
});
