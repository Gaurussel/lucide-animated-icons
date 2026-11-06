import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const wobble = pose({ rotate: [0, -12, 0] }, { duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", ring] });
const pop = (delay: number) =>
	pose({ scale: [1, 1.6, 1] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "file-question-mark",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
			<motion.path {...part(wobble)} d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" style={pivot(12, 13)} />
			<motion.path {...part(pop(0.12))} d="M12 17h.01" style={centered} />
		</motion.g>
	),
});
