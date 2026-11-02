import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const glance = pose(
	{ y: [0, 1, -2, 0], rotate: [0, 6, -18, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.28, 1], ease: ["easeInOut", snap, ring] },
);
const hands = pose(
	{ rotate: [0, 0, 360] },
	{ duration: 0.72, times: [0, 0.22, 1], ease: ["easeInOut", springy], reset: true },
);
const strap = (y: number) =>
	pose({ y: [0, 0, y, 0] }, { duration: 0.72, times: [0, 0.22, 0.36, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "watch",
	render: (part) => (
		<motion.g {...part(glance)} style={pivot(12, 12)}>
			<motion.path {...part(hands)} d="M12 10v2.2l1.6 1" style={pivot(12, 12)} />
			<motion.path
				{...part(strap(-1.5))}
				d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
			/>
			<motion.path {...part(strap(1.5))} d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
			<circle cx="12" cy="12" r="6" />
		</motion.g>
	),
});
