import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const aim = pose({ y: [0, -2, 0], rotate: [0, -20, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const click = pose({ scale: [1, 2.5, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "flashlight",
	render: (part) => (
		<motion.g {...part(aim)} style={pivot(12, 22)}>
			<path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z" />
			<motion.line {...part(redraw(0.15, 0.5))} x1="6" x2="18" y1="6" y2="6" />
			<motion.line {...part(click)} style={centered} x1="12" x2="12" y1="12" y2="12" />
		</motion.g>
	),
});
