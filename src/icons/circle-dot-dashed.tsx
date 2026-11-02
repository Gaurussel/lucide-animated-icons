import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const spin = pose(
	{ rotate: [0, -45, 360], scale: [1, 0.8, 1] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const dot = pose(
	{ scale: [1, 0.5, 3, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "circle-dot-dashed",
	render: (part) => (
		<>
			<motion.g {...part(spin)} style={centered}>
				<path d="M10.1 2.18a9.93 9.93 0 0 1 3.8 0" />
				<path d="M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" />
				<path d="M21.82 10.1a9.93 9.93 0 0 1 0 3.8" />
				<path d="M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" />
				<path d="M13.9 21.82a9.94 9.94 0 0 1-3.8 0" />
				<path d="M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" />
				<path d="M2.18 13.9a9.93 9.93 0 0 1 0-3.8" />
				<path d="M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" />
			</motion.g>
			<motion.circle {...part(dot)} cx="12" cy="12" r="1" style={centered} />
		</>
	),
});
