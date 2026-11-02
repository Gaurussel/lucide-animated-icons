import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -3, 0], rotate: [0, -16, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const flight = pose(
	{ x: [0, -1, 9, -7, 0], y: [0, 1, -7, 5, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "tickets-plane",
	render: (part) => (
		<>
			<motion.path {...part(lift)} d="m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" style={pivot(4.5, 8)} />
			<motion.g {...part(jelly(0.32, 0.7))} style={edge(0.5, 1)}>
				<path d="M6 10V8" />
				<path d="M6 14v1" />
				<path d="M6 19v2" />
				<rect height="13" rx="2" width="20" x="2" y="8" />
				<motion.g {...part(flight)}>
					<path d="M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" />
					<path d="m12 13.5 3.75.5" />
				</motion.g>
			</motion.g>
		</>
	),
});
