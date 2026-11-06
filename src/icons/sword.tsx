import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const slash = pose(
	{ rotate: [0, 12, -21, 0] },
	{ duration: 0.72, times: [0, 0.18, 0.36, 1], ease: ["easeInOut", "easeIn", springy] },
);
const hilt = pose(
	{ rotate: [0, 0, 7.2, 0] },
	{ duration: 0.6, delay: 0.1, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "sword",
	render: (part) => (
		<motion.g {...part(slash)} style={pivot(18, 18)}>
			<motion.polyline {...part(redraw(0.12, 0.4))} points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
			<motion.g {...part(hilt)} style={pivot(17, 17)}>
				<line x1="13" x2="19" y1="19" y2="13" />
				<line x1="16" x2="20" y1="16" y2="20" />
				<line x1="19" x2="21" y1="21" y2="19" />
			</motion.g>
		</motion.g>
	),
});
