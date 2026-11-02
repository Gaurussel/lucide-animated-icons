import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -6, 1, 0], rotate: [0, -12, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);
const dot = pose(
	{ scale: [1, 1, 1.5, 1] },
	{ duration: 0.7, times: [0, 0.38, 0.5, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "map-pin",
	render: (part) => (
		<>
			<motion.g {...part(drop)} style={edge(0.5, 1)}>
				<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
					<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
					<motion.circle {...part(dot)} cx="12" cy="10" r="3" style={centered} />
				</motion.g>
			</motion.g>
		</>
	),
});
