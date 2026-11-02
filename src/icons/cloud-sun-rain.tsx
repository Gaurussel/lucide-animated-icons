import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const shine = pose(
	{ scale: [1, 1.25, 1], rotate: [0, 25, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const pass = pose({ x: [0, -3, 0], y: [0, 1.5, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const fall = (delay: number) =>
	pose(
		{ y: [0, -1, 6, -4, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.65, delay, times: [0, 0.12, 0.4, 0.41, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "cloud-sun-rain",
	render: (part) => (
		<>
			<motion.g {...part(shine)} style={pivot(12, 12)}>
				<path d="M12 2v2" />
				<path d="m4.93 4.93 1.41 1.41" />
				<path d="M20 12h2" />
				<path d="m19.07 4.93-1.41 1.41" />
			</motion.g>
			<motion.path
				{...part(pose({ rotate: [0, 25, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] }))}
				d="M15.947 12.65a4 4 0 0 0-5.925-4.128"
				style={pivot(12, 12)}
			/>
			<motion.path {...part(pass)} d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
			<motion.path {...part(fall(0.06))} d="M11 20v2" />
			<motion.path {...part(fall(0))} d="M7 19v2" />
		</>
	),
});
