import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -3, 0], rotate: [0, -16, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "tickets",
	render: (part) => (
		<>
			<motion.path {...part(lift)} d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" style={pivot(4.5, 8)} />
			<motion.g {...part(jelly(0.32, 0.7))} style={edge(0.5, 1)}>
				<path d="M6 10V8" />
				<path d="M6 14v1" />
				<path d="M6 19v2" />
				<rect height="13" rx="2" width="20" x="2" y="8" />
			</motion.g>
		</>
	),
});
