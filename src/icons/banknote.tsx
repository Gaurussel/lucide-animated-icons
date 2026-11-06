import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const wave = pose(
	{ x: [0, -1.8, 0], rotate: [0, -4.8, 0] },
	{ duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] },
);
const pop = pose({ scale: [1, 1.3, 1] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "banknote",
	render: (part) => (
		<motion.g {...part(wave)} style={pivot(12, 12)}>
			<rect height="12" rx="2" width="20" x="2" y="6" />
			<motion.circle {...part(pop)} cx="12" cy="12" r="2" style={centered} />
			<path d="M6 12h.01M18 12h.01" />
		</motion.g>
	),
});
