import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const swing = pose(
	{ rotate: [0, -10, 0], x: [0, 1, 0] },
	{ duration: 0.75, times: [0, 0.22, 1], ease: [snap, rubber] },
);
const knob = pose({ scale: [1, 2.4, 1] }, { duration: 0.6, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "door-open",
	render: (part) => (
		<>
			<path d="M11 20H2" />
			<path d="M11 4H8a2 2 0 0 0-2 2v14" />
			<motion.path {...part(redraw(0.1, 0.35))} d="M22 20h-3" />
			<motion.g {...part(swing)} style={pivot(11, 21)}>
				<path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" />
				<motion.path {...part(knob)} d="M14 12h.01" style={centered} />
			</motion.g>
		</>
	),
});
