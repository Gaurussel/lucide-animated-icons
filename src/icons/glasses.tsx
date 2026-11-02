import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -5, 0], rotate: [0, -8, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });
const temple = (x: number, direction: number) => ({
	variants: pose({ rotate: [0, 30 * direction, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] }),
	style: pivot(x, 13),
});

export default createAnimatedIcon({
	name: "glasses",
	render: (part) => {
		const left = temple(2.5, 1);
		const right = temple(21.5, -1);
		return (
			<motion.g {...part(lift)} style={pivot(12, 15)}>
				<circle cx="6" cy="15" r="4" />
				<circle cx="18" cy="15" r="4" />
				<path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
				<motion.path {...part(left.variants)} d="M2.5 13 5 7c.7-1.3 1.4-2 3-2" style={left.style} />
				<motion.path {...part(right.variants)} d="M21.5 13 19 7c-.7-1.3-1.5-2-3-2" style={right.style} />
			</motion.g>
		);
	},
});
