import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const spin = pose(
	{ rotate: [0, -40, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const hub = pose({ scale: [1, 0.3, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "disc-3",
	render: (part) => (
		<>
			<circle cx="12" cy="12" r="10" />
			<motion.g {...part(spin)} style={pivot(12, 12)}>
				<path d="M6 12c0-1.7.7-3.2 1.8-4.2" />
				<path d="M18 12c0 1.7-.7 3.2-1.8 4.2" />
			</motion.g>
			<motion.circle {...part(hub)} cx="12" cy="12" r="2" style={centered} />
		</>
	),
});
