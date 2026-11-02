import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose, snap, springy } from "../helpers.ts";

const rise = pose({ y: [0, -3, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const light = (delay: number) =>
	pose({ scale: [1, 2, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "building",
	render: (part) => (
		<motion.g {...part(rise)} style={edge(0.5, 1)}>
			<rect height="20" rx="2" ry="2" width="16" x="4" y="2" />
			<path d="M9 22v-4h6v4" />
			<motion.path {...part(light(0.2))} d="M8 6h.01" style={centered} />
			<motion.path {...part(light(0.25))} d="M16 6h.01" style={centered} />
			<motion.path {...part(light(0.22))} d="M12 6h.01" style={centered} />
			<motion.path {...part(light(0.12))} d="M12 10h.01" style={centered} />
			<motion.path {...part(light(0.05))} d="M12 14h.01" style={centered} />
			<motion.path {...part(light(0.15))} d="M16 10h.01" style={centered} />
			<motion.path {...part(light(0.08))} d="M16 14h.01" style={centered} />
			<motion.path {...part(light(0.1))} d="M8 10h.01" style={centered} />
			<motion.path {...part(light(0))} d="M8 14h.01" style={centered} />
		</motion.g>
	),
});
