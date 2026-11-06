import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const fall = (degrees: number, delay: number) =>
	pose(
		{ rotate: [0, degrees, 0], x: [0, 1.2, 0] },
		{ duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "align-justify",
	render: (part) => (
		<>
			<motion.path {...part(fall(12, 0))} d="M3 6h18" style={pivot(12, 6)} />
			<motion.path {...part(fall(-14, 0.09))} d="M3 12h18" style={pivot(12, 12)} />
			<motion.path {...part(fall(12, 0.18))} d="M3 18h18" style={pivot(12, 18)} />
		</>
	),
});
