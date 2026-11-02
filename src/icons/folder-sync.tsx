import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -2, -2, 0], rotate: [0, 0, -6, -6, 0] },
	{ duration: 0.8, times: [0, 0.15, 0.4, 0.7, 1] },
);

export default createAnimatedIcon({
	name: "folder-sync",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" />
			<motion.g
				{...part(
					pose({ rotate: [0, -25, 360] }, { duration: 0.8, delay: 0.1, times: [0, 0.2, 1], reset: true }),
				)}
				style={pivot(17, 16)}
			>
				<path d="M12 10v4h4" />
				<path d="m12 14 1.535-1.605a5 5 0 0 1 8 1.5" />
				<path d="M22 22v-4h-4" />
				<path d="m22 18-1.535 1.605a5 5 0 0 1-8-1.5" />
			</motion.g>
		</motion.g>
	),
});
