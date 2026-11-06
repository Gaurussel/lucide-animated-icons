import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, springy } from "../helpers.ts";

const flame = (delay: number) =>
	pose(
		{ y: [0, -1.8, 0], scale: [1, 1.72, 1] },
		{ duration: 0.55, delay, times: [0, 0.3, 1], ease: ["easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "cake",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.05, 0.7))} style={edge(0.5, 1)}>
				<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
				<path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
				<path d="M2 21h20" />
				<path d="M7 8v3" />
				<path d="M12 8v3" />
				<path d="M17 8v3" />
			</motion.g>
			<motion.path {...part(flame(0))} d="M7 4h.01" style={centered} />
			<motion.path {...part(flame(0.08))} d="M12 4h.01" style={centered} />
			<motion.path {...part(flame(0.16))} d="M17 4h.01" style={centered} />
		</>
	),
});
