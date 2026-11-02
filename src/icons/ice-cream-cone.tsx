import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const tilt = pose(
	{ rotate: [0, 6, -14, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const lag = pose(
	{ x: [0, 0, 2, 0], rotate: [0, 0, 22, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.38, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "ice-cream-cone",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 22)}>
			<path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
			<motion.g {...part(lag)} style={pivot(12, 11)}>
				<path d="M17 7A5 5 0 0 0 7 7" />
				<path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
			</motion.g>
		</motion.g>
	),
});
