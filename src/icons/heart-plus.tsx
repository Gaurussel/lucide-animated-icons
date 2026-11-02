import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const beat = pose({ scale: [1, 1.3, 1] }, { duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] });
const twist = pose(
	{ scale: [1, 0.5, 1], rotate: [0, 0, 360] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "heart-plus",
	render: (part) => (
		<>
			<motion.path
				{...part(beat)}
				d="M13.5 19.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5A5.5 5.5 0 0 1 7.5 3c1.76 0 3 .5 4.5 2 1.5-1.5 2.74-2 4.5-2a5.5 5.5 0 0 1 5.402 6.5"
				style={pivot(12, 12)}
			/>
			<motion.g {...part(twist)} style={pivot(18, 15)}>
				<path d="M15 15h6" />
				<path d="M18 12v6" />
			</motion.g>
		</>
	),
});
