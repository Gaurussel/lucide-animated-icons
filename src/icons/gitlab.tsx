import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const jump = pose(
	{ y: [0, 2, -5, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const ears = pose(
	{ rotate: [0, 0, -14, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "gitlab",
	render: (part) => (
		<motion.g {...part(jump)}>
			<motion.g {...part(ears)} style={pivot(12, 21)}>
				<motion.path
					{...part(redraw(0, 0.5))}
					d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
				/>
			</motion.g>
		</motion.g>
	),
});
