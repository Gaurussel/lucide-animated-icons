import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const key = (delay: number) =>
	pose({ y: [0, 0.9, 0], scale: [1, 1.72, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const space = pose({ y: [0, 1.2, 0] }, { duration: 0.55, delay: 0.2, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "keyboard",
	render: (part) => (
		<>
			<motion.path {...part(key(0))} d="M6 8h.01" style={centered} />
			<motion.path {...part(key(0.04))} d="M10 8h.01" style={centered} />
			<motion.path {...part(key(0.08))} d="M14 8h.01" style={centered} />
			<motion.path {...part(key(0.12))} d="M18 8h.01" style={centered} />
			<motion.path {...part(key(0.1))} d="M8 12h.01" style={centered} />
			<motion.path {...part(key(0.14))} d="M12 12h.01" style={centered} />
			<motion.path {...part(key(0.18))} d="M16 12h.01" style={centered} />
			<motion.path {...part(space)} d="M7 16h10" />
			<rect height="16" rx="2" width="20" x="2" y="4" />
		</>
	),
});
