import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const front = pose({ x: [0, -2.4, 0], y: [0, 0.6, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const back = pose(
	{ x: [0, 3, 0], y: [0, -1.2, 0] },
	{ duration: 0.7, delay: 0.05, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "cloudy",
	render: (part) => (
		<>
			<motion.path {...part(front)} d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
			<motion.path {...part(back)} d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" />
		</>
	),
});
