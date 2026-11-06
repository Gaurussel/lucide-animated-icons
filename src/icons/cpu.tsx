import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const pins = (x: number, y: number, delay: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const core = pose(
	{ rotate: [0, 0, 0], scale: [1, 0.76, 1] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "cpu",
	render: (part) => (
		<>
			<rect height="16" rx="2" width="16" x="4" y="4" />
			<motion.rect {...part(core)} height="8" rx="1" style={pivot(12, 12)} width="8" x="8" y="8" />
			<motion.g {...part(pins(0, -2.5, 0))}>
				<path d="M12 2v2" />
				<path d="M17 2v2" />
				<path d="M7 2v2" />
			</motion.g>
			<motion.g {...part(pins(2.5, 0, 0.04))}>
				<path d="M20 12h2" />
				<path d="M20 17h2" />
				<path d="M20 7h2" />
			</motion.g>
			<motion.g {...part(pins(0, 2.5, 0.08))}>
				<path d="M12 20v2" />
				<path d="M17 20v2" />
				<path d="M7 20v2" />
			</motion.g>
			<motion.g {...part(pins(-2.5, 0, 0.12))}>
				<path d="M2 12h2" />
				<path d="M2 17h2" />
				<path d="M2 7h2" />
			</motion.g>
		</>
	),
});
