import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, ring, snap, springy } from "../helpers.ts";

const screen = pose(
	{ y: [0, -2.4, 0], rotate: [0, -4.8, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const boom = pose({ scale: [1, 1.6, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "monitor-speaker",
	render: (part) => (
		<>
			<motion.g {...part(screen)} style={edge(0.5, 1)}>
				<path d="M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" />
				<path d="M5.5 20H8" />
			</motion.g>
			<motion.g {...part(jelly(0.1, 0.7))} style={edge(0.5, 1)}>
				<rect height="16" rx="2" width="10" x="12" y="4" />
				<path d="M17 9h.01" />
				<motion.circle {...part(boom)} cx="17" cy="15" r="1" style={centered} />
			</motion.g>
		</>
	),
});
