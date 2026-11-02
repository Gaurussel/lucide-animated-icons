import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const plug = pose(
	{ x: [0, -2, 3, 0], y: [0, 2, -3, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const tip = pose(
	{ x: [0, 0, 2, 0], y: [0, 0, -2, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.36, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "usb",
	render: (part) => (
		<motion.g {...part(plug)}>
			<circle cx="10" cy="7" r="1" />
			<circle cx="4" cy="20" r="1" />
			<path d="M4.7 19.3 19 5" />
			<motion.path {...part(tip)} d="m21 3-3 1 2 2Z" />
			<path d="M9.26 7.68 5 12l2 5" />
			<path d="m10 14 5 2 3.5-3.5" />
			<path d="m18 12 1-1 1 1-1 1Z" />
		</motion.g>
	),
});
