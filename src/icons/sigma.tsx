import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const stamp = pose(
	{ rotate: [0, 0, -8.4, 0], y: [0, 0, -1.2, 0] },
	{ duration: 0.72, times: [0, 0.42, 0.55, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "sigma",
	render: (part) => (
		<motion.g {...part(stamp)} style={pivot(12, 20)}>
			<motion.path
				{...part(redraw(0, 0.45))}
				d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"
			/>
		</motion.g>
	),
});
