import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, ring, snap, springy } from "../helpers.ts";

const push = (direction: number) =>
	pose(
		{ x: [0, -2 * direction, 4 * direction, 0] },
		{ duration: 0.7, times: [0, 0.18, 0.35, 1], ease: ["easeInOut", snap, springy] },
	);
const crease = (direction: number) =>
	pose({ y: [0, 0, 2 * direction, 0] }, { duration: 0.7, times: [0, 0.3, 0.4, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "fold-horizontal",
	render: (part) => (
		<>
			<motion.g {...part(push(1))}>
				<path d="M2 12h6" />
				<path d="m5 15 3-3-3-3" />
			</motion.g>
			<motion.g {...part(push(-1))}>
				<path d="M22 12h-6" />
				<path d="m19 9-3 3 3 3" />
			</motion.g>
			<motion.path {...part(crease(-1.5))} d="M12 2v2" />
			<motion.path {...part(crease(-0.6))} d="M12 8v2" />
			<motion.path {...part(crease(0.6))} d="M12 14v2" />
			<motion.path {...part(crease(1.5))} d="M12 20v2" />
		</>
	),
});
