import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, springy } from "../helpers.ts";

const spoke = (delay: number) =>
	pose(
		{ rotate: [0, 3.62, 0] },
		{ duration: 0.58, delay, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
	);
const gather = pose({ scale: [1, 0.82, 1] }, { duration: 0.72, times: [0, 0.2, 1], ease: ["easeInOut", springy] });

export default createAnimatedIcon({
	name: "asterisk",
	render: (part) => (
		<motion.g {...part(gather)} style={centered}>
			<motion.path {...part(spoke(0))} d="M12 6v12" style={pivot(12, 12)} />
			<motion.path {...part(spoke(0.07))} d="M17.196 9 6.804 15" style={pivot(12, 12)} />
			<motion.path {...part(spoke(0.14))} d="m6.804 9 10.392 6" style={pivot(12, 12)} />
		</motion.g>
	),
});
