import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const talk = pose(
	{ y: [0, -3, 0], rotate: [0, -10, 0], scale: [1, 1.1, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const typing = (delay: number) =>
	pose({ y: [0, -3, 0] }, { duration: 0.45, delay, times: [0, 0.35, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "message-square-more",
	render: (part) => (
		<motion.g {...part(talk)} style={pivot(3, 21)}>
			<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			<motion.path {...part(typing(0.05))} d="M8 10h.01" />
			<motion.path {...part(typing(0.13))} d="M12 10h.01" />
			<motion.path {...part(typing(0.21))} d="M16 10h.01" />
		</motion.g>
	),
});
