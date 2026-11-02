import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring, snap } from "../helpers.ts";

const buzz = pose({ x: [0, -2.5, 0] }, { duration: 0.75, times: [0, 0.1, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "bell-electric",
	render: (part) => (
		<>
			<motion.g {...part(buzz)}>
				<circle cx="9" cy="9" r="7" />
				<path d="M9 9h.01" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.4))} d="M18.518 17.347A7 7 0 0 1 14 19" />
			<motion.path {...part(redraw(0.18, 0.4))} d="M18.8 4A11 11 0 0 1 20 9" />
			<circle cx="20" cy="16" r="2" />
			<rect height="6" rx="2" width="10" x="4" y="16" />
		</>
	),
});
