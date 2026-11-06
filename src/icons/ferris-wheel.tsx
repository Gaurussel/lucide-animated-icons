import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const hub = pose({ scale: [1, 0.7, 1] }, { duration: 0.6, times: [0, 0.2, 1], ease: [snap, springy] });
const base = pose(
	{ y: [0, 0, 0.72, 0] },
	{ duration: 0.75, times: [0, 0.4, 0.5, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "ferris-wheel",
	render: (part) => (
		<>
			<motion.g {...part(turn)} style={pivot(12, 12)}>
				<path d="M12 2v4" />
				<path d="m6.8 15-3.5 2" />
				<path d="m20.7 7-3.5 2" />
				<path d="M6.8 9 3.3 7" />
				<path d="m20.7 17-3.5-2" />
			</motion.g>
			<motion.circle {...part(hub)} cx="12" cy="12" r="2" style={centered} />
			<path d="M18 18.7a9 9 0 1 0-12 0" />
			<motion.g {...part(base)}>
				<path d="m9 22 3-8 3 8" />
				<path d="M8 22h8" />
			</motion.g>
		</>
	),
});
