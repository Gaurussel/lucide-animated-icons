import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const toss = pose({ y: [0, -3, 0], rotate: [0, 9, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "salad",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.4, 0.7))} style={edge(0.5, 1)}>
				<path d="M7 21h10" />
				<path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
			</motion.g>
			<motion.g {...part(toss)} style={pivot(12, 12)}>
				<path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" />
				<path d="m13 12 4-4" />
				<path d="M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" />
			</motion.g>
		</>
	),
});
