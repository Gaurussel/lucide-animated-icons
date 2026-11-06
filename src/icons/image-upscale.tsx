import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const grow = pose({ scale: [1, 1.18, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const reach = pose({ x: [0, 1.2, 0], y: [0, -1.2, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "image-upscale",
	render: (part) => (
		<>
			<motion.g {...part(reach)}>
				<path d="M16 3h5v5" />
				<path d="m21 3-5 5" />
			</motion.g>
			<path d="M17 21h2a2 2 0 0 0 2-2" />
			<path d="M21 12v3" />
			<path d="M3 7V5a2 2 0 0 1 2-2" />
			<path d="M9 3h3" />
			<motion.g {...part(grow)} style={pivot(3, 21)}>
				<path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" />
				<rect height="10" rx="1" width="10" x="3" y="11" />
			</motion.g>
		</>
	),
});
