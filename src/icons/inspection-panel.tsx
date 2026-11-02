import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const rattle = pose({ rotate: [0, -12, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const screw = (delay: number) =>
	pose({ scale: [1, 2.4, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "inspection-panel",
	render: (part) => (
		<motion.g {...part(rattle)} style={pivot(12, 12)}>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(screw(0.05))} d="M7 7h.01" style={centered} />
			<motion.path {...part(screw(0.12))} d="M17 7h.01" style={centered} />
			<motion.path {...part(screw(0.19))} d="M17 17h.01" style={centered} />
			<motion.path {...part(screw(0.26))} d="M7 17h.01" style={centered} />
		</motion.g>
	),
});
