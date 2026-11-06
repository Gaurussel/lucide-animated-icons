import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const click = pose({ y: [0, 1.8, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const tilt = pose(
	{ rotate: [0, 0, -5.4, 0] },
	{ duration: 0.7, times: [0, 0.14, 0.28, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "touchpad",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 20)}>
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<motion.g {...part(click)}>
				<path d="M2 14h20" />
				<motion.path {...part(redraw(0.2, 0.4))} d="M12 20v-6" />
			</motion.g>
		</motion.g>
	),
});
