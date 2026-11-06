import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, ring, snap, springy } from "../helpers.ts";

const impact = pose(
	{ scale: [1, 0.64, 1.24, 1] },
	{ duration: 0.65, times: [0, 0.12, 0.3, 1], ease: [snap, "easeInOut", springy] },
);
const ripple = (scale: number, delay: number) =>
	pose(
		{ scale: [1, 1, scale, 1] },
		{ duration: 0.55, delay, times: [0, 0.2, 0.45, 1], ease: ["easeInOut", snap, springy] },
	);
const jolt = pose(
	{ x: [0, 0, 1.2, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.22, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "target",
	render: (part) => (
		<motion.g {...part(jolt)}>
			<motion.circle {...part(ripple(1.08, 0.15))} cx="12" cy="12" r="10" style={centered} />
			<motion.circle {...part(ripple(1.15, 0.08))} cx="12" cy="12" r="6" style={centered} />
			<motion.circle {...part(impact)} cx="12" cy="12" r="2" style={centered} />
		</motion.g>
	),
});
