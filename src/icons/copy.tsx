import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const stamp = pose({ scale: [1, 0.85, 1] }, { duration: 0.6, times: [0, 0.15, 1], ease: [snap, springy] });
const slide = pose({ x: [0, -3, 0], y: [0, -3, 0] }, { duration: 0.6, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "copy",
	render: (part) => (
		<>
			<motion.rect {...part(stamp)} height="14" rx="2" ry="2" style={centered} width="14" x="8" y="8" />
			<motion.g {...part(slide)}>
				<motion.path {...part(redraw(0, 0.38))} d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
			</motion.g>
		</>
	),
});
