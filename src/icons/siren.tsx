import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const wail = pose({ rotate: [0, -6, 0], y: [0, -1.2, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const flash = pose({ scale: [1, 1.24, 1] }, { duration: 0.65, delay: 0.08, times: [0, 0.25, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "siren",
	render: (part) => (
		<>
			<motion.g {...part(wail)} style={pivot(12, 22)}>
				<path d="M7 18v-6a5 5 0 1 1 10 0v6" />
				<motion.path {...part(redraw(0.1, 0.45))} d="M12 12v6" />
			</motion.g>
			<path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" />
			<motion.g {...part(flash)} style={pivot(12, 12)}>
				<path d="M21 12h1" />
				<path d="M18.5 4.5 18 5" />
				<path d="M2 12h1" />
				<path d="M12 2v1" />
				<path d="m4.929 4.929.707.707" />
			</motion.g>
		</>
	),
});
