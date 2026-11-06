import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, hop, jelly, pose, snap, springy } from "../helpers.ts";

const shutter = pose({ x: [0, 2.4, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "save",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<motion.g {...part(jelly(0.3, 0.7))} style={edge(0.5, 1)}>
				<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
				<path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
				<motion.path {...part(shutter)} d="M7 3v4a1 1 0 0 0 1 1h7" />
			</motion.g>
		</motion.g>
	),
});
