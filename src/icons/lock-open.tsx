import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const swingOpen = pose(
	{ y: [0, -1.8, 0], rotate: [0, -16.8, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "lock-open",
	render: (part) => (
		<>
			<motion.rect
				{...part(jelly(0.36, 0.7))}
				height="11"
				rx="2"
				ry="2"
				style={edge(0.5, 1)}
				width="18"
				x="3"
				y="11"
			/>
			<motion.path {...part(swingOpen)} d="M7 11V7a5 5 0 0 1 9.9-1" style={pivot(7, 11)} />
		</>
	),
});
