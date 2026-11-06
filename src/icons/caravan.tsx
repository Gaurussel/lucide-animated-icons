import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, ring, snap, springy } from "../helpers.ts";

const drive = pose(
	{ x: [0, -1.5, 12, -12, 0], rotate: [0, 2.4, 0, 0, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.75, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const brake = pose(
	{ rotate: [0, 0, -2.4, 0] },
	{ duration: 0.75, times: [0, 0.4, 0.55, 1], ease: ["easeInOut", snap, ring] },
);
const wheel = (delay: number) =>
	pose(
		{ y: [0, 0, -0.9, 0] },
		{ duration: 0.75, delay, times: [0, 0.45, 0.58, 1], ease: ["easeInOut", snap, springy] },
	);
const swingDoor = pose(
	{ x: [0, 0, 0.9, 0] },
	{ duration: 0.75, delay: 0.08, times: [0, 0.4, 0.55, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "caravan",
	render: (part) => (
		<motion.g {...part(drive)} style={edge(0.5, 1)}>
			<motion.g {...part(brake)} style={edge(0.9, 1)}>
				<path d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" />
				<motion.path {...part(swingDoor)} d="M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" />
				<path d="M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" />
			</motion.g>
			<motion.circle {...part(wheel(0))} cx="8" cy="19" r="2" />
		</motion.g>
	),
});
