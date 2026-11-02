import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const grow = pose({ scale: [1, 0.9, 1.2, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] });
const arrow = pose({ x: [0, -1, 1.5, 0], y: [0, 1, -1.5, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] });

export default createAnimatedIcon({
	name: "image-upscale",
	render: (part) => (
		<>
			<motion.g {...part(grow)} style={pivot(3, 21)}>
				<rect height="10" rx="1" width="10" x="3" y="11" />
				<path d="m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" />
			</motion.g>
			<motion.g {...part(arrow)}>
				<path d="M16 3h5v5" />
				<path d="m21 3-5 5" />
			</motion.g>
			<path d="M17 21h2a2 2 0 0 0 2-2" />
			<path d="M21 12v3" />
			<path d="M3 7V5a2 2 0 0 1 2-2" />
			<path d="M9 3h3" />
		</>
	),
});
