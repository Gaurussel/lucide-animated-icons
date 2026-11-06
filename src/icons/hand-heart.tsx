import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const offer = pose(
	{ y: [0, 1.2, 0], rotate: [0, 3.6, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const float = pose(
	{ y: [0, -2.4, 0], scale: [1, 1.18, 1] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "hand-heart",
	render: (part) => (
		<>
			<motion.g {...part(offer)} style={pivot(2, 15)}>
				<path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
				<path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
				<path d="m2 15 6 6" />
			</motion.g>
			<motion.path
				{...part(float)}
				d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"
				style={pivot(16, 12)}
			/>
		</>
	),
});
