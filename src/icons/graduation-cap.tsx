import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, -3.6, 0], rotate: [0, -12, 0] },
	{ duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] },
);
const tassel = pose({ rotate: [0, 24, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "graduation-cap",
	render: (part) => (
		<motion.g {...part(toss)} style={pivot(12, 12)}>
			<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
			<motion.path {...part(tassel)} d="M22 10v6" style={pivot(22, 10)} />
			<path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
		</motion.g>
	),
});
