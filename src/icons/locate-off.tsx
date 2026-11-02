import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const ring = pose({ scale: [1, 0.85, 0.85, 1] }, { duration: 0.85, times: [0, 0.4, 0.6, 1] });
const tick = (x: number, y: number) =>
	pose({ x: [0, x, x, 0], y: [0, y, y, 0] }, { duration: 0.85, times: [0, 0.4, 0.6, 1] });
const slash = pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.85, times: [0, 0.45, 0.6, 1] });

export default createAnimatedIcon({
	name: "locate-off",
	render: (part) => (
		<>
			<motion.path {...part(tick(0, -1.5))} d="M12 19v3" />
			<motion.path {...part(tick(0, 1.5))} d="M12 2v3" />
			<motion.path {...part(tick(-1.5, 0))} d="M19 12h3" />
			<motion.path {...part(tick(1.5, 0))} d="M2 12h3" />
			<motion.g {...part(ring)} style={centered}>
				<path d="M18.89 13.24a7 7 0 0 0-8.13-8.13" />
				<path d="M7.05 7.05a7 7 0 0 0 9.9 9.9" />
			</motion.g>
			<motion.path {...part(slash)} d="m2 2 20 20" />
		</>
	),
});
