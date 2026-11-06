import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const swing = pose(
	{ rotate: [0, 9, -18, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.36, 1], ease: ["easeInOut", "easeIn", springy] },
);
const shiver = pose(
	{ rotate: [0, 0, 6, 0] },
	{ duration: 0.7, times: [0, 0.36, 0.44, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "pickaxe",
	render: (part) => (
		<motion.g {...part(swing)} style={pivot(5, 19)}>
			<path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" />
			<motion.g {...part(shiver)} style={pivot(15, 9)}>
				<path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393" />
				<path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" />
				<path d="M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319" />
			</motion.g>
		</motion.g>
	),
});
