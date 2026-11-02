import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, ring, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -5, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", "easeOut", springy] },
);
const wobble = pose(
	{ rotate: [0, 0, -14, 0] },
	{ duration: 0.75, times: [0, 0.28, 0.38, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "rectangle-goggles",
	render: (part) => (
		<motion.g {...part(lift)}>
			<motion.path
				{...part(wobble)}
				d="M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
				style={centered}
			/>
		</motion.g>
	),
});
