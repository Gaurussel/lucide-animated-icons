import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const eject = pose({ y: [0, -2.4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const reel = (x: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "videotape",
	render: (part) => (
		<motion.g {...part(eject)}>
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<path d="M2 8h20" />
			<motion.circle {...part(reel(-1.5))} cx="8" cy="14" r="2" />
			<motion.path {...part(redraw(0.1, 0.5))} d="M8 12h8" />
			<motion.circle {...part(reel(1.5))} cx="16" cy="14" r="2" />
		</motion.g>
	),
});
