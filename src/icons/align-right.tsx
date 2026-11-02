import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const fall = (degrees: number, delay: number) =>
	pose(
		{ rotate: [0, degrees, 0], x: [0, -2, 0] },
		{ duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "align-right",
	render: (part) => (
		<>
			<motion.path {...part(fall(16, 0))} d="M21 6H3" style={pivot(21, 6)} />
			<motion.path {...part(fall(20, 0.09))} d="M21 12H9" style={pivot(21, 12)} />
			<motion.path {...part(fall(18, 0.18))} d="M21 18H7" style={pivot(21, 18)} />
		</>
	),
});
