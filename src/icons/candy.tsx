import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const twistEnd = (degrees: number) =>
	pose({ rotate: [0, degrees, 0] }, { duration: 0.6, times: [0, 0.2, 1], ease: [snap, ring] });
const unwrap = pose(
	{ rotate: [0, 0, 360], scale: [1, 0.85, 1] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "candy",
	render: (part) => (
		<motion.g {...part(unwrap)} style={centered}>
			<path d="M10 7v10.9" />
			<path d="M14 6.1V17" />
			<motion.path
				{...part(twistEnd(35))}
				d="M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4"
				style={pivot(16.5, 7.5)}
			/>
			<path d="M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07" />
			<motion.path
				{...part(twistEnd(35))}
				d="M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4"
				style={pivot(7.5, 16.5)}
			/>
		</motion.g>
	),
});
