import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const swing = pose({ rotate: [0, 14.4, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });
const shoot = pose({ x: [0, 1.8, 0], y: [0, -1.8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "venus-and-mars",
	render: (part) => (
		<>
			<motion.g {...part(swing)} style={pivot(12, 11)}>
				<path d="M10 20h4" />
				<path d="M12 16v6" />
				<circle cx="12" cy="11" r="5" />
			</motion.g>
			<motion.g {...part(shoot)}>
				<path d="M17 2h4v4" />
				<path d="m21 2-5.46 5.46" />
			</motion.g>
		</>
	),
});
