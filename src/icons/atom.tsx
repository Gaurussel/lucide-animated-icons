import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const orbit = (turn: number) =>
	pose(
		{ rotate: [0, -turn / 12, turn] },
		{ duration: 0.7, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
	);
const core = pose({ scale: [1, 2, 1] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "atom",
	render: (part) => (
		<>
			<motion.circle {...part(core)} cx="12" cy="12" r="1" style={centered} />
			<motion.path
				{...part(orbit(360))}
				d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
				style={pivot(12, 12)}
			/>
			<motion.path
				{...part(orbit(-360))}
				d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
				style={pivot(12, 12)}
			/>
		</>
	),
});
