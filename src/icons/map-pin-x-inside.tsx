import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -6, 1, 0], rotate: [0, -12, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);
const twist = pose(
	{ scale: [1, 0.6, 1], rotate: [0, 0, 360] },
	{ duration: 0.65, times: [0, 0.15, 1], ease: [snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "map-pin-x-inside",
	render: (part) => (
		<>
			<motion.g {...part(drop)} style={edge(0.5, 1)}>
				<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
					<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
					<motion.g {...part(twist)} style={centered}>
						<path d="m14.5 7.5-5 5" />
						<path d="m9.5 7.5 5 5" />
					</motion.g>
				</motion.g>
			</motion.g>
		</>
	),
});
