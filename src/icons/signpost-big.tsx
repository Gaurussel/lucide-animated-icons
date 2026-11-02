import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const point = (direction: number, delay: number) =>
	pose(
		{ x: [0, 6 * direction, 0], rotate: [0, -12 * direction, 0] },
		{ duration: 0.62, delay, times: [0, 0.28, 1], ease: [snap, springy] },
	);

const bob = pose({ y: [0, -2, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "signpost-big",
	render: (part) => (
		<motion.g {...part(bob)}>
			<motion.path {...part(point(-1, 0))} d="M10 9H4L2 7l2-2h6" style={pivot(10, 7)} />
			<motion.path {...part(point(1, 0.1))} d="M14 5h6l2 2-2 2h-6" style={pivot(14, 7)} />
			<path d="M10 22V4a2 2 0 1 1 4 0v18" />
			<path d="M8 22h8" />
		</motion.g>
	),
});
