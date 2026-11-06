import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, 0.6, -1.8, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const flip = pose(
	{ scaleX: [1, 1, -0.2, 1] },
	{ duration: 0.72, times: [0, 0.12, 0.45, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "squares-unite",
	render: (part) => (
		<motion.g {...part(toss)}>
			<motion.path
				{...part(flip)}
				d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z"
				style={centered}
			/>
		</motion.g>
	),
});
