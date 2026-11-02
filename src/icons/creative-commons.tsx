import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const spin = (delay: number) =>
	pose(
		{ rotate: [0, -40, 360] },
		{ duration: 0.65, delay, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
	);
const ringOut = pose(
	{ scale: [1, 1, 1.1, 1] },
	{ duration: 0.75, times: [0, 0.35, 0.47, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "creative-commons",
	render: (part) => (
		<>
			<motion.circle {...part(ringOut)} cx="12" cy="12" r="10" style={centered} />
			<motion.path
				{...part(spin(0))}
				d="M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
				style={pivot(8.7, 12)}
			/>
			<motion.path
				{...part(spin(0.1))}
				d="M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
				style={pivot(15.7, 12)}
			/>
		</>
	),
});
