import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, rubber, snap, springy } from "../helpers.ts";

const knob = pose(
	{ scale: [1, 1.84, 1], x: [0, -0.6, 0] },
	{ duration: 0.45, times: [0, 0.3, 1], ease: [snap, springy] },
);
const swing = pose(
	{ rotate: [0, 0, -8.4, 0], x: [0, 0, 0.6, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", "easeOut", rubber] },
);

export default createAnimatedIcon({
	name: "door-closed",
	render: (part) => (
		<>
			<motion.g {...part(swing)} style={pivot(6, 20)}>
				<path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
				<motion.path {...part(knob)} d="M10 12h.01" style={centered} />
			</motion.g>
			<path d="M2 20h20" />
		</>
	),
});
