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

export default createAnimatedIcon({
	name: "bus",
	render: (part) => (
		<motion.g {...part(drive)} style={edge(0.5, 1)}>
			<motion.g {...part(brake)} style={edge(0.9, 1)}>
				<path d="M8 6v6" />
				<path d="M15 6v6" />
				<path d="M2 12h19.6" />
				<path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
				<path d="M9 18h5" />
			</motion.g>
			<motion.circle {...part(wheel(0))} cx="7" cy="18" r="2" />
			<motion.circle {...part(wheel(0.06))} cx="16" cy="18" r="2" />
		</motion.g>
	),
});
