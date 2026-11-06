import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, redraw, ring, snap } from "../helpers.ts";

const sign = pose(
	{ y: [0, 0, -1.8, 0], rotate: [0, 0, -6, 0] },
	{ duration: 0.72, times: [0, 0.42, 0.56, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "square-parking",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.56, 0.75))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.g {...part(sign)} style={pivot(9, 17)}>
				<motion.path {...part(redraw(0, 0.45))} d="M9 17V7h4a3 3 0 0 1 0 6H9" />
			</motion.g>
		</>
	),
});
