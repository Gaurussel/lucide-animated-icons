import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, snap, springy } from "../helpers.ts";

const eject = pose(
	{ y: [0, -2.4, 0], rotate: [0, -3.6, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const reel = (direction: number) =>
	pose(
		{ x: [0, 1.5 * direction, 0], scale: [1, 0.76, 1] },
		{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "cassette-tape",
	render: (part) => (
		<motion.g {...part(eject)} style={edge(0.5, 1)}>
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<motion.circle {...part(reel(1))} cx="8" cy="10" r="2" style={centered} />
			<path d="M8 12h8" />
			<motion.circle {...part(reel(-1))} cx="16" cy="10" r="2" style={centered} />
			<path d="m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" />
		</motion.g>
	),
});
