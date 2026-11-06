import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const rays = pose(
	{ rotate: [0, 2.43, 0], scale: [1, 0.82, 1] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const core = pose(
	{ scale: [1, 0.85, 1.12, 1] },
	{ duration: 0.72, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "sun",
	render: (part) => (
		<>
			<motion.circle {...part(core)} cx="12" cy="12" r="4" style={centered} />
			<motion.g {...part(rays)} style={pivot(12, 12)}>
				<path d="M12 2v2" />
				<path d="M12 20v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="m17.66 17.66 1.41 1.41" />
				<path d="M2 12h2" />
				<path d="M20 12h2" />
				<path d="m6.34 17.66-1.41 1.41" />
				<path d="m19.07 4.93-1.41 1.41" />
			</motion.g>
		</>
	),
});
