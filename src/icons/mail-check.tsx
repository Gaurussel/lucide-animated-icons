import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const flap = pose(
	{ scaleY: [1, -0.02, -0.02, 1] },
	{ duration: 0.7, times: [0, 0.22, 0.4, 1], ease: [snap, "easeInOut", springy] },
);
const tick = pose(
	{ pathLength: [1, 0, 0, 1], y: [0, 0, -1.8, 0] },
	{ duration: 0.7, times: [0, 0.01, 0.2, 1], ease: ["easeInOut", "easeInOut", snap] },
);

export default createAnimatedIcon({
	name: "mail-check",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.45, 0.7))} style={edge(0.5, 1)}>
				<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
				<motion.path {...part(flap)} d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" style={edge(0.5, 0)} />
			</motion.g>
			<motion.path {...part(tick)} d="m16 19 2 2 4-4" />
		</>
	),
});
