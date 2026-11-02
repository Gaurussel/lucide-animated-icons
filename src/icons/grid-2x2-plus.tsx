import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const tilt = pose(
	{ y: [0, -3, 0], rotate: [0, -10, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const twist = pose(
	{ scale: [1, 0.5, 1], rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "grid-2x2-plus",
	render: (part) => (
		<>
			<motion.path
				{...part(tilt)}
				d="M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
				style={pivot(3, 21)}
			/>
			<motion.g {...part(twist)} style={pivot(19, 19)}>
				<path d="M16 19h6" />
				<path d="M19 22v-6" />
			</motion.g>
		</>
	),
});
