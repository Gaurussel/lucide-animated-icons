import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -3, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const swing = pose(
	{ rotate: [0, 0, 14, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);
const turn = pose(
	{ scaleX: [1, 1, -1, 1] },
	{ duration: 0.72, times: [0, 0.1, 0.4, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "shirt",
	render: (part) => (
		<motion.g {...part(lift)}>
			<motion.g {...part(swing)} style={pivot(12, 2)}>
				<motion.path
					{...part(turn)}
					d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
					style={centered}
				/>
			</motion.g>
		</motion.g>
	),
});
