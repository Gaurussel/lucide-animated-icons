import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const rock = pose(
	{ rotate: [0, 6, -18, 0] },
	{ duration: 0.75, times: [0, 0.1, 0.25, 1], ease: ["easeInOut", snap, ring] },
);
const back = pose(
	{ rotate: [0, 0, -10, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.34, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "rocking-chair",
	render: (part) => (
		<motion.g {...part(rock)} style={pivot(12, 21)}>
			<motion.polyline {...part(back)} points="3.5 2 6.5 12.5 18 12.5" style={pivot(6.5, 12.5)} />
			<line x1="9.5" x2="5.5" y1="12.5" y2="20" />
			<line x1="15" x2="18.5" y1="12.5" y2="20" />
			<path d="M2.75 18a13 13 0 0 0 18.5 0" />
		</motion.g>
	),
});
