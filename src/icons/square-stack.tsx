import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, snap, springy } from "../helpers.ts";

const shuffle = (distance: number, delay: number) =>
	pose(
		{ x: [0, distance, 0], y: [0, distance, 0] },
		{ duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "square-stack",
	render: (part) => (
		<>
			<motion.path {...part(shuffle(3, 0))} d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
			<motion.path {...part(shuffle(2, 0.05))} d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
			<motion.rect {...part(jelly(0.3, 0.68))} height="8" rx="2" style={centered} width="8" x="14" y="14" />
		</>
	),
});
