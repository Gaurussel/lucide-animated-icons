import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const dislike = pose(
	{ y: [0, -0.9, 2.4, 0], rotate: [0, 4.8, -12, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.34, 1], ease: ["easeInOut", snap, springy] },
);
const cuff = pose(
	{ x: [0, 0, 1.2, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.44, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "thumbs-down",
	render: (part) => (
		<motion.g {...part(dislike)} style={pivot(17, 2)}>
			<motion.path {...part(cuff)} d="M17 14V2" />
			<path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
		</motion.g>
	),
});
