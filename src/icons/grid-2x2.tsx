import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const frame = pose(
	{ rotate: [0, -12, 8, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.4, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const turn = pose(
	{ rotate: [0, 0, 360] },
	{ duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "grid-2x2",
	render: (part) => (
		<motion.g {...part(frame)} style={pivot(12, 12)}>
			<motion.g {...part(turn)} style={pivot(12, 12)}>
				<path d="M12 3v18" />
				<path d="M3 12h18" />
			</motion.g>
			<rect height="18" rx="2" width="18" x="3" y="3" />
		</motion.g>
	),
});
