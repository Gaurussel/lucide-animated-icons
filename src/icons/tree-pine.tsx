import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const trunk = pose(
	{ rotate: [0, -1.8, 4.2, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.26, 1], ease: ["easeInOut", snap, ring] },
);
const crown = pose(
	{ y: [0, 0, -1.8, 0], rotate: [0, 0, 9.6, 0] },
	{ duration: 0.72, times: [0, 0.18, 0.36, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "tree-pine",
	render: (part) => (
		<motion.g {...part(trunk)} style={pivot(12, 22)}>
			<motion.path
				{...part(crown)}
				d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
				style={pivot(12, 19)}
			/>
			<path d="M12 22v-3" />
		</motion.g>
	),
});
