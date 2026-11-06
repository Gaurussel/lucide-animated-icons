import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const close = (x: number, y: number) =>
	pose({ x: [0, 2.5 * x, 0], y: [0, 2.5 * y, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const lock = pose({ scale: [1, 0.7, 1] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "focus",
	render: (part) => (
		<>
			<motion.circle {...part(lock)} cx="12" cy="12" r="3" style={centered} />
			<motion.path {...part(close(1, 1))} d="M3 7V5a2 2 0 0 1 2-2h2" />
			<motion.path {...part(close(-1, 1))} d="M17 3h2a2 2 0 0 1 2 2v2" />
			<motion.path {...part(close(-1, -1))} d="M21 17v2a2 2 0 0 1-2 2h-2" />
			<motion.path {...part(close(1, -1))} d="M7 21H5a2 2 0 0 1-2-2v-2" />
		</>
	),
});
