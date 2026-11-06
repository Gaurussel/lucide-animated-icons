import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, redraw, snap, springy } from "../helpers.ts";

const kick = pose({ y: [0, -1.8, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });
const press = pose(
	{ scale: [1, 0.76, 1], rotate: [0, -18, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "square-power",
	render: (part) => (
		<>
			<motion.g {...part(press)} style={pivot(12, 12)}>
				<motion.path {...part(kick)} d="M12 7v4" />
				<motion.path {...part(redraw(0.05, 0.55))} d="M7.998 9.003a5 5 0 1 0 8-.005" />
			</motion.g>
			<motion.rect {...part(jelly(0.25, 0.7))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
		</>
	),
});
