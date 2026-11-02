import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const cackle = pose(
	{ rotate: [0, -16, 0], y: [0, -2, 0] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: [snap, ring] },
);
const glare = (delay: number) =>
	pose({ y: [0, -2, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "skull",
	render: (part) => (
		<motion.g {...part(cackle)} style={pivot(12, 22)}>
			<path d="m12.5 17-.5-1-.5 1h1z" />
			<path d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" />
			<motion.circle {...part(glare(0.1))} cx="15" cy="12" r="1" style={centered} />
			<motion.circle {...part(glare(0.16))} cx="9" cy="12" r="1" style={centered} />
		</motion.g>
	),
});
