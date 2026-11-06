import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const like = pose(
	{ y: [0, 0.9, -2.4, 0], rotate: [0, 4.8, -13.2, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.34, 1], ease: ["easeInOut", snap, springy] },
);
const cuff = pose(
	{ x: [0, 0, -1.2, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.44, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "thumbs-up",
	render: (part) => (
		<motion.g {...part(like)} style={pivot(7, 22)}>
			<motion.path {...part(cuff)} d="M7 10v12" />
			<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
		</motion.g>
	),
});
