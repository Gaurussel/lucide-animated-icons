import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const bob = pose(
	{ y: [0, -1.8, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.65, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "file-audio-2",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" />
			<motion.g {...part(bob)} style={pivot(6, 16)}>
				<circle cx="3" cy="17" r="1" />
				<path d="M2 17v-3a4 4 0 0 1 8 0v3" />
				<circle cx="9" cy="17" r="1" />
			</motion.g>
		</motion.g>
	),
});
