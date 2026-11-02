import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const sweep = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const tick = pose({ scale: [1, 0.9, 1] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "clock-7",
	render: (part) => (
		<motion.g {...part(tick)} style={centered}>
			<motion.path {...part(sweep)} d="M12 6v6l-2 4" style={pivot(12, 12)} />
			<circle cx="12" cy="12" r="10" />
		</motion.g>
	),
});
