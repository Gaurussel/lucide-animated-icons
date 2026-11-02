import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const say = (delay: number, degrees: number) =>
	pose(
		{ y: [0, -4, 0], rotate: [0, degrees, 0] },
		{ duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "languages",
	render: (part) => (
		<>
			<motion.g {...part(say(0, -16))} style={pivot(8, 14)}>
				<path d="m5 8 6 6" />
				<path d="m4 14 6-6 2-3" />
				<path d="M2 5h12" />
				<path d="M7 2h1" />
			</motion.g>
			<motion.g {...part(say(0.15, 16))} style={pivot(17, 22)}>
				<path d="m22 22-5-10-5 10" />
				<path d="M14 18h6" />
			</motion.g>
		</>
	),
});
