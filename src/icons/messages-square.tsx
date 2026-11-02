import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const say = (delay: number, degrees: number) =>
	pose(
		{ y: [0, -3, 0], rotate: [0, degrees, 0] },
		{ duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "messages-square",
	render: (part) => (
		<>
			<motion.path
				{...part(say(0, -12))}
				d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
				style={pivot(2, 15)}
			/>
			<motion.path
				{...part(say(0.15, 12))}
				d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
				style={pivot(22, 22)}
			/>
		</>
	),
});
