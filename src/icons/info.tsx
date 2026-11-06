import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const bounce = (height: number, delay: number) =>
	pose({ y: [0, -height, 0] }, { duration: 0.65, delay, times: [0, 0.3, 1], ease: [snap, springy] });

const body = pose({ y: [0, -1.2, 0], rotate: [0, -6, 0] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "info",
	render: (part) => (
		<motion.g {...part(body)} style={pivot(12, 22)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path {...part(bounce(2.5, 0.06))} d="M12 16v-4" />
			<motion.path {...part(bounce(5, 0))} d="M12 8h.01" />
		</motion.g>
	),
});
