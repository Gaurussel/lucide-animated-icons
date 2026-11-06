import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const stamp = pose({ scale: [1, 0.91, 1] }, { duration: 0.65, times: [0, 0.15, 1], ease: [snap, springy] });
const slide = pose(
	{ x: [0, -1.8, 0], y: [0, -1.8, 0] },
	{ duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "copy-check",
	render: (part) => (
		<>
			<motion.g {...part(stamp)} style={centered}>
				<rect height="14" rx="2" ry="2" width="14" x="8" y="8" />
				<motion.path {...part(redraw(0.15, 0.4))} d="m12 15 2 2 4-4" />
			</motion.g>
			<motion.g {...part(slide)}>
				<motion.path {...part(redraw(0, 0.38))} d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
			</motion.g>
		</>
	),
});
