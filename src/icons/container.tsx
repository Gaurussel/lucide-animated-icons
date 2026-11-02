import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const hoist = pose({ y: [0, -4, 0], rotate: [0, -8, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "container",
	render: (part) => (
		<motion.g {...part(hoist)} style={pivot(12, 12)}>
			<path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" />
			<path d="M10 21.9V14L2.1 9.1" />
			<path d="m10 14 11.9-6.9" />
			<motion.path {...part(redraw(0.15, 0.4))} d="M14 19.8v-8.1" />
			<motion.path {...part(redraw(0.22, 0.4))} d="M18 17.5V9.4" />
		</motion.g>
	),
});
