import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const rattle = pose({ rotate: [0, -14, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, ring] });
const bells = pose({ y: [0, -2.5, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, ring] });
const plus = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "alarm-clock-plus",
	render: (part) => (
		<motion.g {...part(rattle)} style={pivot(12, 13)}>
			<motion.g {...part(bells)}>
				<path d="M5 3 2 6" />
				<path d="m22 6-3-3" />
			</motion.g>
			<circle cx="12" cy="13" r="8" />
			<path d="M6.38 18.7 4 21" />
			<path d="M17.64 18.67 20 21" />
			<motion.g {...part(plus)} style={centered}>
				<path d="M12 10v6" />
				<path d="M9 13h6" />
			</motion.g>
		</motion.g>
	),
});
