import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const click = pose(
	{ x: [0, -1.2, 1.8, 0], y: [0, -1.2, 1.8, 0], scale: [1, 1.05, 0.89, 1] },
	{ duration: 0.65, times: [0, 0.18, 0.32, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "mouse-pointer-2",
	render: (part) => (
		<motion.g {...part(click)} style={pivot(4, 4)}>
			<motion.path
				{...part(redraw(0.3, 0.4))}
				d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
			/>
		</motion.g>
	),
});
