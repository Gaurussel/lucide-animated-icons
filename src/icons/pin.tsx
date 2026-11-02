import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const stab = pose(
	{ y: [0, -6, 1, 0], rotate: [0, -15, 0, 0] },
	{ duration: 0.65, times: [0, 0.3, 0.45, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "pin",
	render: (part) => (
		<motion.g {...part(stab)} style={edge(0.5, 1)}>
			<motion.g {...part(jelly(0.45, 0.65))} style={edge(0.5, 1)}>
				<path d="M12 17v5" />
				<path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" />
			</motion.g>
		</motion.g>
	),
});
