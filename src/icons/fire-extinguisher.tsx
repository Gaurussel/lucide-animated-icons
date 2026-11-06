import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const aim = pose({ y: [0, -1.8, 0], rotate: [0, 6, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const whip = pose({ rotate: [0, -15, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });
const squeeze = pose({ rotate: [0, 15, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "fire-extinguisher",
	render: (part) => (
		<motion.g {...part(aim)} style={pivot(13, 22)}>
			<path d="M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" />
			<path d="M9 18h8" />
			<path d="M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" />
			<motion.path {...part(squeeze)} d="M18 3h-3" style={pivot(15, 3)} />
			<motion.g {...part(whip)} style={pivot(11, 3)}>
				<path d="M11 3a6 6 0 0 0-6 6v11" />
				<path d="M5 13h4" />
			</motion.g>
		</motion.g>
	),
});
