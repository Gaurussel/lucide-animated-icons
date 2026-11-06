import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const bell = pose(
	{ scale: [1, 1.36, 1], y: [0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const light = (delay: number) =>
	pose({ scale: [1, 1.96, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const door = pose({ y: [0, -0.9, 0] }, { duration: 0.6, delay: 0.1, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "university",
	render: (part) => (
		<>
			<motion.path {...part(door)} d="M14 21v-3a2 2 0 0 0-4 0v3" />
			<motion.path {...part(light(0.1))} d="M18 12h.01" style={centered} />
			<motion.path {...part(light(0.22))} d="M18 16h.01" style={centered} />
			<path d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" />
			<motion.path {...part(light(0.16))} d="M6 12h.01" style={centered} />
			<motion.path {...part(light(0.28))} d="M6 16h.01" style={centered} />
			<motion.circle {...part(bell)} cx="12" cy="10" r="2" style={centered} />
		</>
	),
});
