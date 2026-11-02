import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -4, 0], rotate: [0, -15, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "pizza",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(21, 21)}>
			<motion.path {...part(redraw(0.25, 0.35))} d="m12 14-1 1" />
			<motion.path {...part(redraw(0.32, 0.35))} d="m13.75 18.25-1.25 1.42" />
			<path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" />
			<motion.path {...part(redraw(0.18, 0.4))} d="M18.8 9.3a1 1 0 0 0 2.1 7.7" />
			<path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" />
		</motion.g>
	),
});
