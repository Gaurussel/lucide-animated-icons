import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const flap = pose({ scaleY: [1, -0.02, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });
const alarm = pose(
	{ rotate: [0, -15, 0], y: [0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: [snap, ring] },
);

export default createAnimatedIcon({
	name: "mail-warning",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.02, 0.65))} style={edge(0.5, 1)}>
				<path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" />
				<motion.path {...part(flap)} d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" style={edge(0.5, 0)} />
			</motion.g>
			<motion.g {...part(alarm)} style={pivot(20, 22)}>
				<path d="M20 14v4" />
				<path d="M20 22v.01" />
			</motion.g>
		</>
	),
});
