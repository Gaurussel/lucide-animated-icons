import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const lid = pose(
	{ y: [0, -3, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] },
);
const rise = pose(
	{ y: [0, 1.08, -5.4, 4.32, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "archive-restore",
	render: (part) => (
		<>
			<motion.rect {...part(lid)} height="5" rx="1" style={edge(0, 1)} width="20" x="2" y="3" />
			<motion.g {...part(jelly(0.4, 0.65))} style={edge(0.5, 1)}>
				<path d="M4 8v11a2 2 0 0 0 2 2h2" />
				<path d="M20 8v11a2 2 0 0 1-2 2h-2" />
			</motion.g>
			<motion.g {...part(rise)}>
				<path d="m9 15 3-3 3 3" />
				<path d="M12 12v9" />
			</motion.g>
		</>
	),
});
