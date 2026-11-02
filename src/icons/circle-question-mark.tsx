import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, springy] });
const puzzle = pose({ rotate: [0, -25, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: ["easeInOut", ring] });
const dot = pose({ y: [0, -3, 0] }, { duration: 0.55, delay: 0.1, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "circle-question-mark",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.path {...part(puzzle)} d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" style={pivot(12, 13)} />
			<motion.path {...part(dot)} d="M12 17h.01" />
		</>
	),
});
