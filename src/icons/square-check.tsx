import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, redraw, ring, snap } from "../helpers.ts";

const tick = pose(
	{ scale: [1, 1, 1.35, 1] },
	{ duration: 0.72, times: [0, 0.4, 0.55, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "square-check",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.4, 0.72))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.g {...part(tick)} style={pivot(11, 14)}>
				<motion.path {...part(redraw(0, 0.35))} d="m9 12 2 2 4-4" />
			</motion.g>
		</>
	),
});
