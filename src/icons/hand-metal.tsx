import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const thrust = pose(
	{ y: [0, 2, -4, 0], rotate: [0, -6, 14, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const curl = (delay: number) =>
	pose({ y: [0, 0, 2.5, 0] }, { duration: 0.6, delay, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "hand-metal",
	render: (part) => (
		<motion.g {...part(thrust)} style={pivot(13, 22)}>
			<motion.path {...part(curl(0.08))} d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" />
			<motion.path {...part(curl(0.02))} d="M14 11V9a2 2 0 1 0-4 0v2" />
			<path d="M10 10.5V5a2 2 0 1 0-4 0v9" />
			<path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" />
		</motion.g>
	),
});
