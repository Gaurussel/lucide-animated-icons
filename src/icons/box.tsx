import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, redraw, snap, springy } from "../helpers.ts";

const toss = pose(
	{ y: [0, -3, 0], rotate: [0, -8.4, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "box",
	render: (part) => (
		<motion.g {...part(toss)} style={edge(0.5, 1)}>
			<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
			<motion.path {...part(redraw(0.15, 0.5))} d="m3.3 7 8.7 5 8.7-5" />
			<motion.path {...part(redraw(0.25, 0.45))} d="M12 22V12" />
		</motion.g>
	),
});
