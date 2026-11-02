import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, springy } from "../helpers.ts";

const flip = pose(
	{ y: [0, 1, -3, 0], scaleX: [1, 1, -1, 1] },
	{ duration: 0.72, times: [0, 0.1, 0.38, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "type-outline",
	render: (part) => (
		<motion.g {...part(flip)} style={centered}>
			<motion.path
				{...part(redraw(0.1, 0.6))}
				d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"
			/>
		</motion.g>
	),
});
