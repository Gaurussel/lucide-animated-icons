import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, rubber, springy } from "../helpers.ts";

const twirl = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.7, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const nod = pose(
	{ rotate: [0, -20, 0], scale: [1, 0.85, 1] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "badge-plus",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<motion.path
				{...part(twirl)}
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
				style={centered}
			/>
			<motion.g {...part(nod)} style={pivot(12, 12)}>
				<line x1="12" x2="12" y1="8" y2="16" />
				<line x1="8" x2="16" y1="12" y2="12" />
			</motion.g>
		</motion.g>
	),
});
