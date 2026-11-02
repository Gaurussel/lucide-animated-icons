import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const lid = pose({ y: [0, -6, 0], rotate: [0, -16, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "gift",
	render: (part) => (
		<>
			<motion.g {...part(lid)} style={pivot(3, 12)}>
				<rect height="4" rx="1" width="18" x="3" y="8" />
				<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
			</motion.g>
			<motion.g {...part(jelly(0.4, 0.7))} style={edge(0.5, 1)}>
				<path d="M12 8v13" />
				<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
			</motion.g>
		</>
	),
});
