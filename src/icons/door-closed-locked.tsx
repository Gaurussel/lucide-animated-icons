import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const shackle = pose({ y: [0, -2.1, 0] }, { duration: 0.65, times: [0, 0.3, 1], ease: [snap, springy] });
const knock = pose({ x: [0, -0.9, 0] }, { duration: 0.65, times: [0, 0.2, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "door-closed-locked",
	render: (part) => (
		<>
			<motion.g {...part(knock)}>
				<path d="M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
				<path d="M10 12h.01" />
			</motion.g>
			<path d="M2 20h8" />
			<motion.path {...part(shackle)} d="M20 17v-2a2 2 0 1 0-4 0v2" />
			<motion.rect {...part(jelly(0.36, 0.65))} height="5" rx="1" style={edge(0.5, 1)} width="8" x="14" y="17" />
		</>
	),
});
