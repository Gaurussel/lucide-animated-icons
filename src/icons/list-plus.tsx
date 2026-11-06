import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, rubber, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, -1.8, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const nod = pose(
	{ rotate: [0, -12, 0], scale: [1, 0.91, 1] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "list-plus",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M16 6H3" />
			<motion.path {...part(line(0.07))} d="M11 12H3" />
			<motion.path {...part(line(0.14))} d="M16 18H3" />
			<motion.g {...part(hop(0.65))} style={centered}>
				<motion.g {...part(nod)} style={centered}>
					<path d="M18 9v6" />
					<path d="M21 12h-6" />
				</motion.g>
			</motion.g>
		</>
	),
});
