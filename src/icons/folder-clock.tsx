import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -2.4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const tick = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "folder-clock",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.path
				{...part(jelly(0.44, 0.65))}
				d="M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"
				style={edge(0.5, 1)}
			/>
			<circle cx="16" cy="16" r="6" />
			<motion.path {...part(tick)} d="M16 14v2.2l1.6 1" style={pivot(16, 16)} />
		</motion.g>
	),
});
