import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const dab = pose(
	{ x: [0, 1.8, -1.2, 0], y: [0, 1.8, -1.2, 0], rotate: [0, 0, -7.2, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
);
const anchor = pose({ scale: [1, 0.58, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "pen-tool",
	render: (part) => (
		<motion.g {...part(dab)} style={pivot(18, 18)}>
			<path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" />
			<path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" />
			<motion.path {...part(redraw(0.25, 0.4))} d="m2.3 2.3 7.286 7.286" />
			<motion.circle {...part(anchor)} cx="11" cy="11" r="2" style={centered} />
		</motion.g>
	),
});
