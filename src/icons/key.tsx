import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const turn = pose(
	{ x: [0, 1.5, 1.5, 0], y: [0, -1.5, -1.5, 0], rotate: [0, 0, -60, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.4, 1], ease: ["easeInOut", snap, springy] },
);
const click = pose(
	{ rotate: [0, 0, 25, 0] },
	{ duration: 0.75, times: [0, 0.38, 0.48, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "key",
	render: (part) => (
		<motion.g {...part(turn)} style={pivot(7.5, 15.5)}>
			<motion.path
				{...part(click)}
				d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
				style={pivot(17, 6)}
			/>
			<path d="m21 2-9.6 9.6" />
			<circle cx="7.5" cy="15.5" r="5.5" />
		</motion.g>
	),
});
