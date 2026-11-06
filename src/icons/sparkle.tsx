import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, redraw, snap, springy } from "../helpers.ts";

const twirl = pose(
	{ scale: [1, 0.76, 1.15, 1], rotate: [0, 0, -9.9, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.38, 1], ease: ["easeInOut", snap, springy], reset: true },
);

export default createAnimatedIcon({
	name: "sparkle",
	render: (part) => (
		<motion.g {...part(hop(0.72))} style={centered}>
			<motion.g {...part(twirl)} style={centered}>
				<motion.path
					{...part(redraw(0.1, 0.45))}
					d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
				/>
			</motion.g>
		</motion.g>
	),
});
