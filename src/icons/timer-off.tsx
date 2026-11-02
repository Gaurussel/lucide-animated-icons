import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const press = pose({ y: [0, 2, 0] }, { duration: 0.5, times: [0, 0.3, 1], ease: [snap, springy] });
const stall = pose({ rotate: [0, 70, 0] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, ring] });
const alarm = pose({ rotate: [0, -16, 0] }, { duration: 0.75, times: [0, 0.12, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "timer-off",
	render: (part) => (
		<motion.g {...part(alarm)} style={pivot(12, 14)}>
			<motion.path {...part(press)} d="M10 2h4" />
			<path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" />
			<path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" />
			<motion.path {...part(stall)} d="M12 12v-2" style={pivot(12, 14)} />
			<motion.path {...part(redraw(0.2, 0.5))} d="m2 2 20 20" />
		</motion.g>
	),
});
