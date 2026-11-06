import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap } from "../helpers.ts";

const listen = pose(
	{ rotate: [0, -9, 0], x: [0, -0.9, 0] },
	{ duration: 0.75, times: [0, 0.22, 1], ease: [snap, rubber] },
);

export default createAnimatedIcon({
	name: "ear",
	render: (part) => (
		<motion.g {...part(listen)} style={pivot(12, 20)}>
			<path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" />
			<motion.path {...part(redraw(0.1, 0.45))} d="M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" />
		</motion.g>
	),
});
