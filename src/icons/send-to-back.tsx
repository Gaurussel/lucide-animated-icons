import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const sink = pose(
	{ x: [0, 2.4, 0], y: [0, 2.4, 0], scale: [1, 0.76, 1] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const rise = pose(
	{ x: [0, -2.4, 0], y: [0, -2.4, 0], scale: [1, 1.15, 1] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "send-to-back",
	render: (part) => (
		<>
			<motion.rect {...part(rise)} height="8" rx="2" style={centered} width="8" x="14" y="14" />
			<motion.rect {...part(sink)} height="8" rx="2" style={centered} width="8" x="2" y="2" />
			<motion.path {...part(redraw(0.2, 0.45))} d="M7 14v1a2 2 0 0 0 2 2h1" />
			<motion.path {...part(redraw(0.2, 0.45))} d="M14 7h1a2 2 0 0 1 2 2v1" />
		</>
	),
});
