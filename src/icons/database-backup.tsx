import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const lid = pose({ y: [0, -1.8, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });
const rewind = pose(
	{ rotate: [0, 30, -360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "database-backup",
	render: (part) => (
		<>
			<motion.ellipse {...part(lid)} cx="12" cy="5" rx="9" ry="3" />
			<path d="M3 12a9 3 0 0 0 5 2.69" />
			<path d="M21 9.3V5" />
			<path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
			<motion.g {...part(rewind)} style={pivot(17.5, 17)}>
				<path d="M12 12v4h4" />
				<path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
			</motion.g>
		</>
	),
});
