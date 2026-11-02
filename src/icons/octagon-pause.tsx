import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const brake = pose({ rotate: [0, -20, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const bar = (delay: number) =>
	pose({ y: [0, -3, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "octagon-pause",
	render: (part) => (
		<motion.g {...part(brake)} style={pivot(12, 12)}>
			<path d="M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" />
			<motion.path {...part(bar(0.05))} d="M10 15V9" />
			<motion.path {...part(bar(0.13))} d="M14 15V9" />
		</motion.g>
	),
});
