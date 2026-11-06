import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const climb = pose({ y: [0, -2.4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const roll = pose({ x: [0, 1.8, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "waves-ladder",
	render: (part) => (
		<>
			<motion.g {...part(climb)}>
				<path d="M19 5a2 2 0 0 0-2 2v11" />
				<path d="M7 13h10" />
				<path d="M7 9h10" />
				<path d="M9 5a2 2 0 0 0-2 2v11" />
			</motion.g>
			<motion.path
				{...part(roll)}
				d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			/>
		</>
	),
});
