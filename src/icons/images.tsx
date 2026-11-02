import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const deal = pose(
	{ x: [0, 3, 0], y: [0, -3, 0], rotate: [0, 10, 0] },
	{ duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "images",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.12, 0.5))} d="M18 22H4a2 2 0 0 1-2-2V6" />
			<motion.g {...part(deal)} style={centered}>
				<path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" />
				<circle cx="12" cy="8" r="2" />
				<rect height="16" rx="2" width="16" x="6" y="2" />
			</motion.g>
		</>
	),
});
