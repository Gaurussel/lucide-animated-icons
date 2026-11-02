import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap } from "../helpers.ts";

const flicker = pose({ x: [0, -2, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "battery-low",
	render: (part) => (
		<motion.g {...part(flicker)}>
			<path d="M22 14v-4" />
			<motion.path {...part(redraw(0.05, 0.45))} d="M6 14v-4" />
			<rect height="12" rx="2" width="16" x="2" y="6" />
		</motion.g>
	),
});
