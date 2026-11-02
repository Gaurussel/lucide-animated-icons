import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, snap, springy } from "../helpers.ts";

const push = (direction: number) =>
	pose(
		{ y: [0, -2 * direction, 4 * direction, 0] },
		{ duration: 0.7, times: [0, 0.18, 0.35, 1], ease: ["easeInOut", snap, springy] },
	);
const crease = (direction: number) =>
	pose({ x: [0, 0, 2 * direction, 0] }, { duration: 0.7, times: [0, 0.3, 0.4, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "fold-vertical",
	render: (part) => (
		<>
			<motion.g {...part(push(1))}>
				<path d="M12 8V2" />
				<path d="m15 5-3 3-3-3" />
			</motion.g>
			<motion.g {...part(push(-1))}>
				<path d="M12 22v-6" />
				<path d="m15 19-3-3-3 3" />
			</motion.g>
			<motion.path {...part(crease(-1.5))} d="M4 12H2" />
			<motion.path {...part(crease(-0.6))} d="M10 12H8" />
			<motion.path {...part(crease(0.6))} d="M16 12h-2" />
			<motion.path {...part(crease(1.5))} d="M22 12h-2" />
		</>
	),
});
