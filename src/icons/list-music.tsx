import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, -3, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const note = pose(
	{ y: [0, -5, 0], rotate: [0, -18, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "list-music",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M16 6H3" />
			<motion.path {...part(line(0.07))} d="M12 12H3" />
			<motion.path {...part(line(0.14))} d="M12 18H3" />
			<motion.g {...part(note)} style={pivot(18.5, 18)}>
				<path d="M21 15V6" />
				<path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
			</motion.g>
		</>
	),
});
