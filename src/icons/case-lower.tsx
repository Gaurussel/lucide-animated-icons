import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const hopLetter = (delay: number) =>
	pose({ y: [0, -5, 0], rotate: [0, -10, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "case-lower",
	render: (part) => (
		<>
			<motion.g {...part(hopLetter(0))} style={edge(0.5, 1)}>
				<circle cx="7" cy="12" r="3" />
				<path d="M10 9v6" />
			</motion.g>
			<motion.g {...part(hopLetter(0.12))} style={edge(0.5, 1)}>
				<circle cx="17" cy="12" r="3" />
				<path d="M14 7v8" />
			</motion.g>
		</>
	),
});
