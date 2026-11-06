import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const topple = pose(
	{ rotate: [0, 0, 15.6, 0] },
	{ duration: 0.72, times: [0, 0.22, 0.36, 1], ease: ["easeInOut", snap, ring] },
);
const spill = pose(
	{ rotate: [0, 0, -18, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.44, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "wine-off",
	render: (part) => (
		<>
			<motion.g {...part(topple)} style={pivot(16, 22)}>
				<path d="M8 22h8" />
				<motion.path {...part(spill)} d="M7 10h3m7 0h-1.343" style={pivot(12, 10)} />
				<path d="M12 15v7" />
				<path d="M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" />
			</motion.g>
			<motion.line {...part(redraw(0, 0.3))} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
