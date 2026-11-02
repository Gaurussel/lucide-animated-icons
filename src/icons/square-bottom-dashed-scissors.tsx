import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const snip = (direction: number) =>
	pose({ rotate: [0, 18 * direction, 0] }, { duration: 0.72, times: [0, 0.15, 1], ease: [snap, ring] });
const slide = pose({ x: [0, 3, 0] }, { duration: 0.72, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-bottom-dashed-scissors",
	render: (part) => (
		<>
			<path d="M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2" />
			<path d="M10 22H8" />
			<path d="M16 22h-2" />
			<motion.g {...part(slide)}>
				<motion.g {...part(snip(-1))} style={pivot(11, 12)}>
					<circle cx="8" cy="8" r="2" />
					<path d="M9.414 9.414 12 12" />
					<path d="M14.8 14.8 18 18" />
				</motion.g>
				<motion.g {...part(snip(1))} style={pivot(11, 12)}>
					<circle cx="8" cy="16" r="2" />
					<path d="m18 6-8.586 8.586" />
				</motion.g>
			</motion.g>
		</>
	),
});
