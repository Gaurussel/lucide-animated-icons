import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose, rubber, snap, springy } from "../helpers.ts";

const flip = pose(
	{ rotate: [0, -10, 0], y: [0, -2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const rings = (delay: number) =>
	pose({ y: [0, -3, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const beat = pose(
	{ scale: [1, 0.8, 1.35, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.32, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "calendar-heart",
	render: (part) => (
		<>
			<motion.g {...part(flip)} style={pivot(12, 22)}>
				<path d="M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
				<motion.path {...part(rings(0))} d="M8 2v4" />
				<motion.path {...part(rings(0.08))} d="M16 2v4" />
			</motion.g>
			<motion.path
				{...part(beat)}
				d="M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
				style={edge(0.5, 0.9)}
			/>
		</>
	),
});
