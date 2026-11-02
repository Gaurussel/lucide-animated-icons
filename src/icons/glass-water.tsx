import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const tilt = pose(
	{ rotate: [0, 4, -18, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const slosh = pose(
	{ x: [0, 0, -1.5, 0], rotate: [0, 0, 34, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "glass-water",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 22)}>
			<path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" />
			<motion.path {...part(slosh)} d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" style={pivot(12, 12)} />
		</motion.g>
	),
});
