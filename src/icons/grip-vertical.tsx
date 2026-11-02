import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const nudge = (delay: number) =>
	pose({ x: [0, 4, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "grip-vertical",
	render: (part) => (
		<>
			<motion.g {...part(nudge(0))}>
				<circle cx="9" cy="5" r="1" />
				<circle cx="15" cy="5" r="1" />
			</motion.g>
			<motion.g {...part(nudge(0.1))}>
				<circle cx="9" cy="12" r="1" />
				<circle cx="15" cy="12" r="1" />
			</motion.g>
			<motion.g {...part(nudge(0.2))}>
				<circle cx="9" cy="19" r="1" />
				<circle cx="15" cy="19" r="1" />
			</motion.g>
		</>
	),
});
