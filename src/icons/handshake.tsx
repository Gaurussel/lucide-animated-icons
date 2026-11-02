import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, snap, springy } from "../helpers.ts";

const reach = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", springy] });
const pump = pose({ y: [0, 0, -3, 0] }, { duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "handshake",
	render: (part) => (
		<motion.g {...part(pump)}>
			<motion.g {...part(reach(1))}>
				<path d="m11 17 2 2a1 1 0 1 0 3-3" />
				<path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
				<path d="m21 3 1 11h-2" />
			</motion.g>
			<motion.g {...part(reach(-1))}>
				<path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
				<path d="M3 4h8" />
			</motion.g>
		</motion.g>
	),
});
