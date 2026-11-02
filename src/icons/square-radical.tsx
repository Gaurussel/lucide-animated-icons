import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, redraw, ring, snap } from "../helpers.ts";

const settle = pose(
	{ rotate: [0, 0, -10, 0] },
	{ duration: 0.72, times: [0, 0.42, 0.55, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "square-radical",
	render: (part) => (
		<>
			<motion.g {...part(settle)} style={pivot(11, 17)}>
				<motion.path {...part(redraw(0, 0.45))} d="M7 12h2l2 5 2-10h4" />
			</motion.g>
			<motion.rect {...part(jelly(0.5, 0.75))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
		</>
	),
});
