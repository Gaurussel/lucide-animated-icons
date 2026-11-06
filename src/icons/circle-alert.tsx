import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.91, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const alarm = pose(
	{ y: [0, -2.4, 0], rotate: [0, -15, 0] },
	{ duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] },
);

export default createAnimatedIcon({
	name: "circle-alert",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.g {...part(alarm)} style={pivot(12, 16)}>
				<line x1="12" x2="12" y1="8" y2="12" />
				<line x1="12" x2="12.01" y1="16" y2="16" />
			</motion.g>
		</>
	),
});
