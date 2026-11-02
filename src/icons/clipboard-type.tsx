import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const clip = pose({ y: [0, -3.5, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });
const board = pose({ rotate: [0, -8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "clipboard-type",
	render: (part) => (
		<motion.g {...part(board)} style={pivot(12, 22)}>
			<motion.rect {...part(clip)} height="4" rx="1" ry="1" width="8" x="8" y="2" />
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
			<motion.path {...part(redraw(0.1, 0.4))} d="M9 12v-1h6v1" />
			<motion.path {...part(redraw(0.3, 0.3))} d="M11 17h2" />
			<motion.path {...part(redraw(0.2, 0.35))} d="M12 11v6" />
		</motion.g>
	),
});
