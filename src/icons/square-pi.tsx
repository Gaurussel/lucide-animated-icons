import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, snap, springy } from "../helpers.ts";

const jump = pose(
	{ y: [0, -2.4, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.65, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "square-pi",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.45, 0.68))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.g {...part(jump)} style={centered}>
				<path d="M7 7h10" />
				<path d="M10 7v10" />
				<path d="M16 17a2 2 0 0 1-2-2V7" />
			</motion.g>
		</>
	),
});
