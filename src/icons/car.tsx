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
	name: "car",
	render: (part) => (
		<motion.g {...part(drive)} style={edge(0.5, 1)}>
			<motion.g {...part(brake)} style={edge(0.9, 1)}>
				<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
				<path d="M9 17h6" />
			</motion.g>
			<motion.circle {...part(wheel(0))} cx="7" cy="17" r="2" />
			<motion.circle {...part(wheel(0.06))} cx="17" cy="17" r="2" />
		</motion.g>
	),
});
