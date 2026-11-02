import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const twist = pose(
	{ rotate: [0, 0, 360], scale: [1, 0.7, 1] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const digit = pose({ y: [0, -4, 0] }, { duration: 0.65, delay: 0.08, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "superscript",
	render: (part) => (
		<>
			<motion.g {...part(twist)} style={pivot(8, 15)}>
				<path d="m4 19 8-8" />
				<path d="m12 19-8-8" />
			</motion.g>
			<motion.g {...part(digit)}>
				<motion.path
					{...part(redraw(0.1, 0.5))}
					d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
				/>
			</motion.g>
		</>
	),
});
