import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const unfold = pose(
	{ y: [0, -4, 0], rotate: [0, -10, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "map",
	render: (part) => (
		<motion.g {...part(unfold)} style={edge(0.5, 1)}>
			<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
			<motion.path {...part(redraw(0.1, 0.45))} d="M9 3.236v15" />
			<motion.path {...part(redraw(0.2, 0.45))} d="M15 5.764v15" />
		</motion.g>
	),
});
