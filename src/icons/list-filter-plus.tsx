import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, rubber, snap, springy } from "../helpers.ts";

const sift = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const nod = pose(
	{ rotate: [0, -20, 0], scale: [1, 0.85, 1] },
	{ duration: 0.65, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "list-filter-plus",
	render: (part) => (
		<>
			<motion.path {...part(sift(-3, 0))} d="M11 6H3" />
			<motion.path {...part(sift(3, 0.07))} d="M7 12h8" />
			<motion.path {...part(sift(-3, 0.14))} d="M10 18h4" />
			<motion.g {...part(nod)} style={centered}>
				<path d="M15 6h6" />
				<path d="M18 9V3" />
			</motion.g>
		</>
	),
});
