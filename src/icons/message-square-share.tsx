import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pivot, pose, snap, springy } from "../helpers.ts";

const shoot = pose(
	{ x: [0, 3.6, -2.4, 0], y: [0, -3.6, 2.4, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.3, 0.31, 1], ease: ["easeIn", "easeInOut", springy] },
);
const flinch = pose({ scale: [1, 0.93, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "message-square-share",
	render: (part) => (
		<motion.g {...part(hop(0.65))} style={centered}>
			<motion.path {...part(flinch)} d="M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7" style={pivot(3, 21)} />
			<motion.g {...part(shoot)}>
				<path d="M16 3h5v5" />
				<path d="m16 8 5-5" />
			</motion.g>
		</motion.g>
	),
});
