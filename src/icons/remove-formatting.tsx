import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, ring, snap, springy } from "../helpers.ts";

const shake = pose({ rotate: [0, -7.2, 0] }, { duration: 0.75, times: [0, 0.1, 1], ease: [snap, ring] });
const twist = pose(
	{ scale: [1, 0.64, 1], rotate: [0, 0, 0] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "remove-formatting",
	render: (part) => (
		<>
			<motion.path {...part(shake)} d="M4 7V4h16v3" style={centered} />
			<path d="M5 20h6" />
			<motion.path {...part(redraw(0.05, 0.5))} d="M13 4 8 20" />
			<motion.g {...part(twist)} style={centered}>
				<path d="m15 15 5 5" />
				<path d="m20 15-5 5" />
			</motion.g>
		</>
	),
});
