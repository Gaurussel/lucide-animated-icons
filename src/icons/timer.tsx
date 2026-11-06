import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const press = pose({ y: [0, 1.2, 0] }, { duration: 0.5, times: [0, 0.3, 1], ease: [snap, springy] });
const tick = pose(
	{ rotate: [0, 0, 360] },
	{ duration: 0.75, times: [0, 0.12, 1], ease: ["easeInOut", springy], reset: true },
);
const alarm = pose(
	{ y: [0, -1.2, 0], rotate: [0, -9.6, 0] },
	{ duration: 0.75, times: [0, 0.12, 1], ease: [snap, ring] },
);

export default createAnimatedIcon({
	name: "timer",
	render: (part) => (
		<motion.g {...part(alarm)} style={pivot(12, 22)}>
			<motion.line {...part(press)} x1="10" x2="14" y1="2" y2="2" />
			<motion.line {...part(tick)} style={pivot(12, 14)} x1="12" x2="15" y1="14" y2="11" />
			<circle cx="12" cy="14" r="8" />
		</motion.g>
	),
});
