import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const twist = pose(
	{ rotate: [0, 0, 0], scale: [1, 0.82, 1] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const digit = pose({ y: [0, 2.4, 0] }, { duration: 0.65, delay: 0.08, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "subscript",
	render: (part) => (
		<>
			<motion.g {...part(twist)} style={pivot(8, 9)}>
				<path d="m4 5 8 8" />
				<path d="m12 5-8 8" />
			</motion.g>
			<motion.g {...part(digit)}>
				<motion.path
					{...part(redraw(0.1, 0.5))}
					d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
				/>
			</motion.g>
		</>
	),
});
