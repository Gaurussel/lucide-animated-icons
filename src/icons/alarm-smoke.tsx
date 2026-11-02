import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const alarm = pose(
	{ rotate: [0, 0, -8, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.4, 1], ease: ["easeInOut", snap, ring] },
);
const drift = pose(
	{ x: [0, -1.5, 1.5, 0] },
	{ duration: 0.7, times: [0, 0.25, 0.5, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "alarm-smoke",
	render: (part) => (
		<>
			<motion.g {...part(alarm)} style={pivot(12, 3)}>
				<path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" />
				<path d="M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" />
			</motion.g>
			<motion.g {...part(drift)}>
				<motion.path {...part(redraw(0, 0.45))} d="M6 21c0-2.5 2-2.5 2-5" />
				<motion.path {...part(redraw(0.06, 0.45))} d="M11 21c0-2.5 2-2.5 2-5" />
				<motion.path {...part(redraw(0.12, 0.45))} d="M16 21c0-2.5 2-2.5 2-5" />
			</motion.g>
		</>
	),
});
