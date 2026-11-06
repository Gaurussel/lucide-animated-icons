import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const lid = pose(
	{ y: [0, -3, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "archive",
	render: (part) => (
		<>
			<motion.rect {...part(lid)} height="5" rx="1" style={edge(0, 1)} width="20" x="2" y="3" />
			<motion.g {...part(jelly(0.4, 0.65))} style={edge(0.5, 1)}>
				<path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
				<path d="M10 12h4" />
			</motion.g>
		</>
	),
});
