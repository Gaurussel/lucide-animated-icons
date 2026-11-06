import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const flipX = pose(
	{ scaleX: [1, 1, -0.2, 1] },
	{ duration: 0.75, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "file-digit",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
			<motion.rect {...part(flipX)} height="6" rx="2" style={centered} width="4" x="2" y="12" />
			<motion.path {...part(redraw(0.25, 0.35))} d="M10 12h2v6" />
			<motion.path {...part(redraw(0.32, 0.3))} d="M10 18h4" />
		</motion.g>
	),
});
