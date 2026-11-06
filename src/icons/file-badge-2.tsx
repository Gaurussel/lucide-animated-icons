import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 0, -3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const swing = pose({ rotate: [0, -15, 0] }, { duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", ring] });

export default createAnimatedIcon({
	name: "file-badge-2",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
			<motion.g {...part(swing)} style={pivot(12, 7)}>
				<path d="m13.69 12.479 1.29 4.88a.5.5 0 0 1-.697.591l-1.844-.849a1 1 0 0 0-.88.001l-1.846.85a.5.5 0 0 1-.693-.593l1.29-4.88" />
				<circle cx="12" cy="10" r="3" />
			</motion.g>
		</motion.g>
	),
});
