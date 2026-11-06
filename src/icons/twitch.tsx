import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const chatter = pose(
	{ y: [0, 0.6, -1.2, 0], rotate: [0, 3.6, -8.4, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.28, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "twitch",
	render: (part) => (
		<motion.g {...part(chatter)} style={pivot(8, 22)}>
			<motion.path {...part(redraw(0.05, 0.6))} d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
		</motion.g>
	),
});
