import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const spread = (x: number, y: number) =>
	pose({ x: [0, 2 * x, 0], y: [0, 2 * y, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });
const fill = pose({ scale: [1, 1.3, 1] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "fullscreen",
	render: (part) => (
		<>
			<motion.path {...part(spread(-1, -1))} d="M3 7V5a2 2 0 0 1 2-2h2" />
			<motion.path {...part(spread(1, -1))} d="M17 3h2a2 2 0 0 1 2 2v2" />
			<motion.path {...part(spread(1, 1))} d="M21 17v2a2 2 0 0 1-2 2h-2" />
			<motion.path {...part(spread(-1, 1))} d="M7 21H5a2 2 0 0 1-2-2v-2" />
			<motion.rect {...part(fill)} height="8" rx="1" style={centered} width="10" x="7" y="8" />
		</>
	),
});
