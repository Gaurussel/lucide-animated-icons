import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const sweep = pose(
	{ rotate: [0, -20, 360], scale: [1, 0.85, 1] },
	{ duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const blip = (delay: number) =>
	pose({ scale: [1, 2.2, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "radar",
	render: (part) => (
		<>
			<motion.g {...part(sweep)} style={pivot(12, 12)}>
				<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
				<motion.path {...part(blip(0.15))} d="M4 6h.01" style={centered} />
				<path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
				<path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
				<motion.path {...part(blip(0.3))} d="M12 18h.01" style={centered} />
				<path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
				<circle cx="12" cy="12" r="2" />
				<path d="m13.41 10.59 5.66-5.66" />
			</motion.g>
		</>
	),
});
