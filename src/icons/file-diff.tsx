import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 0, -5, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const twist = pose(
	{ rotate: [0, 0, 360], scale: [1, 0.5, 1] },
	{ duration: 0.65, delay: 0.05, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "file-diff",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<motion.g {...part(twist)} style={pivot(12, 10)}>
				<path d="M9 10h6" />
				<path d="M12 13V7" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.4))} d="M9 17h6" />
		</motion.g>
	),
});
