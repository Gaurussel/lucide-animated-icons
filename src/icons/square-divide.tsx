import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, snap, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, 0, 360] },
	{ duration: 0.68, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const apart = (direction: number) =>
	pose({ y: [0, 3 * direction, 0] }, { duration: 0.65, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-divide",
	render: (part) => (
		<>
			<motion.rect
				{...part(jelly(0.4, 0.68))}
				height="18"
				rx="2"
				ry="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.line {...part(turn)} style={centered} x1="8" x2="16" y1="12" y2="12" />
			<motion.line {...part(apart(1))} x1="12" x2="12" y1="16" y2="16" />
			<motion.line {...part(apart(-1))} x1="12" x2="12" y1="8" y2="8" />
		</>
	),
});
