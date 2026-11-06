import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const offer = pose(
	{ y: [0, 1.2, 0], rotate: [0, 3.6, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const flip = (delay: number) =>
	pose({ y: [0, -3, 0] }, { duration: 0.55, delay, times: [0, 0.35, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "hand-coins",
	render: (part) => (
		<>
			<motion.g {...part(offer)} style={pivot(2, 16)}>
				<path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" />
				<path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
				<path d="m2 16 6 6" />
			</motion.g>
			<motion.circle {...part(flip(0))} cx="16" cy="9" r="2.9" />
			<motion.circle {...part(flip(0.12))} cx="6" cy="5" r="3" />
		</>
	),
});
