import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const knob = pose({ x: [0, 2, 0] }, { duration: 0.5, times: [0, 0.3, 1], ease: [snap, springy] });
const lamp = pose(
	{ scale: [1, 1, 3, 1] },
	{ duration: 0.6, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const spin = pose(
	{ rotate: [0, 0, 720] },
	{ duration: 0.72, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const rattle = pose(
	{ rotate: [0, 0, -6, 0] },
	{ duration: 0.72, times: [0, 0.25, 0.32, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "washing-machine",
	render: (part) => (
		<motion.g {...part(rattle)} style={pivot(12, 22)}>
			<motion.path {...part(knob)} d="M3 6h3" />
			<motion.path {...part(lamp)} d="M17 6h.01" style={centered} />
			<rect height="20" rx="2" width="18" x="3" y="2" />
			<circle cx="12" cy="13" r="5" />
			<motion.path {...part(spin)} d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" style={pivot(12, 13)} />
		</motion.g>
	),
});
