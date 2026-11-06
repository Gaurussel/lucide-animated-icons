import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const sweep = pose(
	{ rotate: [0, 3.62, 0] },
	{ duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const hub = pose({ scale: [1, 0.64, 1] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "radius",
	render: (part) => (
		<>
			<motion.g {...part(sweep)} style={pivot(12, 12)}>
				<path d="M20.34 17.52a10 10 0 1 0-2.82 2.82" />
				<circle cx="19" cy="19" r="2" />
				<path d="m13.41 13.41 4.18 4.18" />
			</motion.g>
			<motion.circle {...part(hub)} cx="12" cy="12" r="2" style={centered} />
		</>
	),
});
