import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const flip = pose(
	{ rotate: [0, -6, 0], y: [0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const rings = (delay: number) =>
	pose({ y: [0, -1.8, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "calendar-off",
	render: (part) => (
		<>
			<motion.g {...part(flip)} style={pivot(12, 22)}>
				<path d="M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" />
				<path d="M21 15.5V6a2 2 0 0 0-2-2H9.5" />
				<motion.path {...part(rings(0))} d="M16 2v4" />
				<path d="M3 10h7" />
				<path d="M21 10h-5.5" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.45))} d="m2 2 20 20" />
		</>
	),
});
