import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const steer = pose(
	{ rotate: [0, 30, -360] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const hub = pose(
	{ scale: [1, 1, 1.6, 1] },
	{ duration: 0.7, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "ship-wheel",
	render: (part) => (
		<>
			<motion.g {...part(steer)} style={pivot(12, 12)}>
				<circle cx="12" cy="12" r="8" />
				<path d="M12 2v7.5" />
				<path d="m19 5-5.23 5.23" />
				<path d="M22 12h-7.5" />
				<path d="m19 19-5.23-5.23" />
				<path d="M12 14.5V22" />
				<path d="M10.23 13.77 5 19" />
				<path d="M9.5 12H2" />
				<path d="M10.23 10.23 5 5" />
			</motion.g>
			<motion.circle {...part(hub)} cx="12" cy="12" r="2.5" style={centered} />
		</>
	),
});
