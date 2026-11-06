import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap, springy } from "../helpers.ts";

const flicker = pose({ x: [0, -1.2, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, rubber] });
const jump = pose({ y: [0, -1.8, 0] }, { duration: 0.5, delay: 0.25, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "battery-warning",
	render: (part) => (
		<motion.g {...part(flicker)}>
			<motion.path {...part(jump)} d="M10 17h.01" />
			<motion.path {...part(redraw(0.05, 0.4))} d="M10 7v6" />
			<path d="M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" />
			<path d="M22 14v-4" />
			<path d="M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
		</motion.g>
	),
});
