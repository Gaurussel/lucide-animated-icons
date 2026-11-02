import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const shutter = pose({ x: [0, 4, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const stack = pose({ x: [0, -2, 0], y: [0, 2, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "save-all",
	render: (part) => (
		<>
			<motion.path {...part(stack)} d="M18 22H4a2 2 0 0 1-2-2V6" />
			<motion.g {...part(jelly(0.3, 0.7))} style={edge(0.5, 1)}>
				<motion.path {...part(shutter)} d="M10 2v3a1 1 0 0 0 1 1h5" />
				<path d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" />
				<path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" />
			</motion.g>
		</>
	),
});
