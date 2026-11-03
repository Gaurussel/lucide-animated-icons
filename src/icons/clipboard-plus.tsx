import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const clip = pose({ y: [0, -3.5, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });
const board = pose({ rotate: [0, -8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const nod = pose(
	{ rotate: [0, -20, 0], scale: [1, 0.85, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "clipboard-plus",
	render: (part) => (
		<motion.g {...part(board)} style={pivot(12, 22)}>
			<motion.rect {...part(clip)} height="4" rx="1" ry="1" width="8" x="8" y="2" />
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
			<motion.g {...part(nod)} style={pivot(12, 14)}>
				<path d="M9 14h6" />
				<path d="M12 17v-6" />
			</motion.g>
		</motion.g>
	),
});
