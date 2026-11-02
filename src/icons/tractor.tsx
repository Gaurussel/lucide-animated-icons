import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const wheelie = pose(
	{ x: [0, -1.5, 3, 0], rotate: [0, 3, -15, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.34, 1], ease: ["easeInOut", snap, springy] },
);
const roof = pose(
	{ rotate: [0, 0, 14, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);
const bump = pose(
	{ y: [0, 0, -2, 0] },
	{ duration: 0.72, times: [0, 0.4, 0.52, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "tractor",
	render: (part) => (
		<motion.g {...part(wheelie)} style={pivot(7, 20)}>
			<path d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" />
			<path d="M16 18h-5" />
			<path d="M18 5a1 1 0 0 0-1 1v5.573" />
			<motion.g {...part(roof)} style={pivot(8, 11)}>
				<path d="M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" />
				<path d="M4 11V4" />
				<path d="M8 10.1V4" />
			</motion.g>
			<path d="M7 15h.01" />
			<motion.circle {...part(bump)} cx="18" cy="18" r="2" />
			<circle cx="7" cy="15" r="5" />
		</motion.g>
	),
});
