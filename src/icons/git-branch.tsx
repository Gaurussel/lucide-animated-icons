import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, snap, springy } from "../helpers.ts";

const swing = pose({ rotate: [0, -22, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });
const node = (delay: number) =>
	pose({ scale: [1, 1.35, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "git-branch",
	render: (part) => (
		<>
			<line x1="6" x2="6" y1="3" y2="15" />
			<motion.circle {...part(node(0))} cx="6" cy="18" r="3" style={centered} />
			<motion.g {...part(swing)} style={pivot(6, 18)}>
				<motion.circle {...part(node(0.2))} cx="18" cy="6" r="3" style={centered} />
				<path d="M18 9a9 9 0 0 1-9 9" />
			</motion.g>
		</>
	),
});
