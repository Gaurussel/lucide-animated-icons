import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, ring } from "../helpers.ts";

const snapOff = pose(
	{ y: [0, 0.6, -1.2, 0], rotate: [0, 4.8, -10.8, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.28, 1], ease: ["easeInOut", "easeInOut", ring] },
);

export default createAnimatedIcon({
	name: "unlink-2",
	render: (part) => (
		<motion.g {...part(snapOff)} style={centered}>
			<motion.path {...part(redraw(0.08, 0.6))} d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" />
		</motion.g>
	),
});
