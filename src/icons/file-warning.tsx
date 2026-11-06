import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const bang = pose(
	{ y: [0, -2.4, 0], rotate: [0, -12, 0] },
	{ duration: 0.7, delay: 0.05, times: [0, 0.25, 1], ease: [snap, ring] },
);
const pop = (delay: number) =>
	pose({ scale: [1, 1.6, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "file-warning",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<motion.g {...part(bang)} style={pivot(12, 17)}>
				<path d="M12 9v4" />
				<motion.path {...part(pop(0.12))} d="M12 17h.01" style={centered} />
			</motion.g>
		</motion.g>
	),
});
