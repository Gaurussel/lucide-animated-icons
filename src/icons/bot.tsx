import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const tilt = pose(
	{ rotate: [0, -14, 0], y: [0, -2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const antenna = pose({ rotate: [0, 30, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", ring] });
const blink = pose({ y: [0, 0, 1, 0] }, { duration: 0.7, times: [0, 0.4, 0.5, 1], ease: ["easeInOut", snap, springy] });
const ear = (direction: number) =>
	pose({ x: [0, 2 * direction, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "bot",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 20)}>
			<motion.path {...part(antenna)} d="M12 8V4H8" style={pivot(12, 8)} />
			<rect height="12" rx="2" width="16" x="4" y="8" />
			<motion.path {...part(ear(-1))} d="M2 14h2" />
			<motion.path {...part(ear(1))} d="M20 14h2" />
			<motion.g {...part(blink)}>
				<path d="M15 13v2" />
				<path d="M9 13v2" />
			</motion.g>
		</motion.g>
	),
});
