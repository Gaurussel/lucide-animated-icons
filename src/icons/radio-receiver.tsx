import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const shake = pose({ rotate: [0, -7.2, 0] }, { duration: 0.75, times: [0, 0.1, 1], ease: [snap, ring] });
const knob = pose({ scale: [1, 2.2, 1] }, { duration: 0.6, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "radio-receiver",
	render: (part) => (
		<motion.g {...part(shake)} style={pivot(12, 18)}>
			<path d="M5 16v2" />
			<path d="M19 16v2" />
			<rect height="8" rx="2" width="20" x="2" y="8" />
			<motion.path {...part(knob)} d="M18 12h.01" style={centered} />
		</motion.g>
	),
});
