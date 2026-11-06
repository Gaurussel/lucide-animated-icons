import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const steam = (delay: number) =>
	pose({ y: [0, -2.4, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });

const body = pose({ y: [0, -1.2, 0], rotate: [0, -6, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "heater",
	render: (part) => (
		<motion.g {...part(body)} style={pivot(12, 22)}>
			<motion.g {...part(steam(0))}>
				<motion.path {...part(redraw(0, 0.5))} d="M11 8c2-3-2-3 0-6" />
			</motion.g>
			<motion.g {...part(steam(0.12))}>
				<motion.path {...part(redraw(0.12, 0.5))} d="M15.5 8c2-3-2-3 0-6" />
			</motion.g>
			<path d="M6 10h.01" />
			<path d="M6 14h.01" />
			<path d="M10 16v-4" />
			<path d="M14 16v-4" />
			<path d="M18 16v-4" />
			<path d="M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
			<path d="M5 20v2" />
			<path d="M19 20v2" />
		</motion.g>
	),
});
