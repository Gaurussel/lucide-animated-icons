import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const flip = (delay: number) =>
	pose(
		{ y: [0, 0.6, -3, 0], rotate: [0, 0, -14, 0] },
		{ duration: 0.7, delay, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy], reset: true },
	);

export default createAnimatedIcon({
	name: "egg-fried",
	render: (part) => (
		<>
			<motion.path
				{...part(flip(0))}
				d="M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
				style={pivot(12, 12)}
			/>
			<motion.circle {...part(flip(0.08))} cx="11.5" cy="12.5" r="3.5" style={pivot(12, 12)} />
		</>
	),
});
