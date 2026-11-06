import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const swish = pose({ rotate: [0, -15, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const burst = pose(
	{ scale: [1, 0.64, 1.24, 1], rotate: [0, 0, 27, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "wand",
	render: (part) => (
		<>
			<motion.g {...part(burst)} style={pivot(15, 9)}>
				<path d="M15 4V2" />
				<path d="M15 16v-2" />
				<path d="M8 9h2" />
				<path d="M20 9h2" />
				<path d="M17.8 11.8 19 13" />
				<path d="M15 9h.01" />
				<path d="M17.8 6.2 19 5" />
				<path d="M12.2 6.2 11 5" />
			</motion.g>
			<motion.path {...part(swish)} d="m3 21 9-9" style={pivot(3, 21)} />
		</>
	),
});
