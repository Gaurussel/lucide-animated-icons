import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const rays = pose(
	{ rotate: [0, -20, 360], scale: [1, 0.7, 1] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const core = pose(
	{ scale: [1, 0.75, 1.2, 1] },
	{ duration: 0.72, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "sun-dim",
	render: (part) => (
		<>
			<motion.circle {...part(core)} cx="12" cy="12" r="4" style={centered} />
			<motion.g {...part(rays)} style={pivot(12, 12)}>
				<path d="M12 4h.01" />
				<path d="M20 12h.01" />
				<path d="M12 20h.01" />
				<path d="M4 12h.01" />
				<path d="M17.657 6.343h.01" />
				<path d="M17.657 17.657h.01" />
				<path d="M6.343 17.657h.01" />
				<path d="M6.343 6.343h.01" />
			</motion.g>
		</>
	),
});
