import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, rubber, snap, springy } from "../helpers.ts";

const drop = pose(
	{ y: [0, -3.6, 0.6, 0], rotate: [0, -7.2, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);
const dot = pose(
	{ scale: [1, 1, 1.3, 1] },
	{ duration: 0.7, times: [0, 0.38, 0.5, 1], ease: ["easeInOut", snap, springy] },
);
const nod = pose(
	{ rotate: [0, -12, 0], scale: [1, 0.91, 1] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "map-pin-plus",
	render: (part) => (
		<>
			<motion.g {...part(drop)} style={edge(0.5, 1)}>
				<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
					<path d="M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" />
					<motion.circle {...part(dot)} cx="12" cy="10" r="3" style={centered} />
				</motion.g>
			</motion.g>
			<motion.g {...part(nod)} style={centered}>
				<path d="M16 18h6" />
				<path d="M19 15v6" />
			</motion.g>
		</>
	),
});
