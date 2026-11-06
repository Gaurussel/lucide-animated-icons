import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const tilt = pose(
	{ rotate: [0, -8.4, 0], y: [0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const antenna = pose({ rotate: [0, 18, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", ring] });
const blink = pose(
	{ y: [0, 0, 0.6, 0] },
	{ duration: 0.7, times: [0, 0.4, 0.5, 1], ease: ["easeInOut", snap, springy] },
);
const ear = (direction: number) =>
	pose({ x: [0, 2 * direction, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "bot-message-square",
	render: (part) => (
		<motion.g {...part(tilt)} style={pivot(12, 20)}>
			<motion.path {...part(antenna)} d="M12 6V2H8" style={pivot(12, 6)} />
			<path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
			<motion.path {...part(ear(-1))} d="M2 12h2" />
			<motion.path {...part(ear(1))} d="M20 12h2" />
			<motion.g {...part(blink)}>
				<path d="M9 11v2" />
				<path d="M15 11v2" />
			</motion.g>
		</motion.g>
	),
});
