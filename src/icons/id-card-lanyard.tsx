import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const swing = pose(
	{ rotate: [0, 8, -20, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const lag = pose(
	{ x: [0, 0, 2, 0], rotate: [0, 0, 20, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "id-card-lanyard",
	render: (part) => (
		<motion.g {...part(swing)} style={pivot(12, 2)}>
			<path d="M13.5 8h-3" />
			<path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
			<path d="m9 2 3 6" />
			<motion.g {...part(lag)} style={pivot(12, 12)}>
				<path d="M16.899 22A5 5 0 0 0 7.1 22" />
				<circle cx="12" cy="15" r="3" />
			</motion.g>
		</motion.g>
	),
});
