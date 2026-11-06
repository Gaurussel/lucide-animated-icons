import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const clip = pose(
	{ y: [0, 0.6, -2.4, 0], rotate: [0, 4.8, -15, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "paperclip",
	render: (part) => (
		<motion.g {...part(clip)} style={pivot(12, 12)}>
			<motion.path
				{...part(redraw(0.05, 0.6))}
				d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"
			/>
		</motion.g>
	),
});
