import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const stem = pose(
	{ y: [0, 0, 1.5, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "file-type-2",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
			<motion.path {...part(redraw(0.08, 0.35))} d="M2 13v-1h6v1" />
			<motion.g {...part(stem)}>
				<path d="M5 12v6" />
				<path d="M4 18h2" />
			</motion.g>
		</motion.g>
	),
});
