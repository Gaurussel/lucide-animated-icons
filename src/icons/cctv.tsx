import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const pan = pose(
	{ rotate: [0, -15.6, -12, 0] },
	{ duration: 0.75, times: [0, 0.25, 0.45, 1], ease: [snap, "easeInOut", ring] },
);
const spot = pose(
	{ scale: [1, 1, 1.72, 1] },
	{ duration: 0.7, times: [0, 0.25, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const mount = pose(
	{ x: [0, 0, -0.6, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.3, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "cctv",
	render: (part) => (
		<>
			<motion.g {...part(pan)} style={pivot(9, 15)}>
				<path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
				<path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
				<motion.path {...part(spot)} d="M7 9h.01" style={centered} />
			</motion.g>
			<motion.g {...part(mount)}>
				<path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
				<path d="M2 21v-4" />
			</motion.g>
		</>
	),
});
