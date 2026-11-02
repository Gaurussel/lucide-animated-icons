import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const cross = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);
const pop = pose({ scale: [1, 1.5, 1] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });
const wave = pose({ x: [0, -3, 0], rotate: [0, -8, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "banknote-x",
	render: (part) => (
		<>
			<motion.g {...part(wave)} style={pivot(12, 12)}>
				<path d="M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
				<path d="M18 12h.01" />
				<path d="M6 12h.01" />
				<motion.circle {...part(pop)} cx="12" cy="12" r="2" style={centered} />
			</motion.g>
			<motion.g {...part(cross)} style={pivot(19.5, 19.5)}>
				<path d="m17 17 5 5" />
				<path d="m22 17-5 5" />
			</motion.g>
		</>
	),
});
