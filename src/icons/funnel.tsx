import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const sift = pose(
	{ y: [0, -3, 1, 0], rotate: [0, 10, -4, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.4, 1], ease: [snap, "easeIn", ring] },
);

export default createAnimatedIcon({
	name: "funnel",
	render: (part) => (
		<motion.g {...part(sift)} style={pivot(12, 22)}>
			<motion.path
				{...part(redraw(0.1, 0.5))}
				d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
			/>
		</motion.g>
	),
});
