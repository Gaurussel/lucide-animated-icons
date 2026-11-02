import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const trunk = pose(
	{ rotate: [0, 4, -8, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.26, 1], ease: ["easeInOut", snap, ring] },
);
const crown = pose(
	{ y: [0, 0, -2, 0], rotate: [0, 0, -18, 0] },
	{ duration: 0.72, times: [0, 0.18, 0.36, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "tree-deciduous",
	render: (part) => (
		<motion.g {...part(trunk)} style={pivot(12, 22)}>
			<motion.path
				{...part(crown)}
				d="M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"
				style={pivot(12, 19)}
			/>
			<path d="M12 19v3" />
		</motion.g>
	),
});
