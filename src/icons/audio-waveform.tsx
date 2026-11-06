import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, springy } from "../helpers.ts";

const invert = pose(
	{ scaleY: [1, 1, -0.2, 1] },
	{ duration: 0.72, times: [0, 0.3, 0.5, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "audio-waveform",
	render: (part) => (
		<motion.g {...part(invert)} style={centered}>
			<motion.path
				{...part(redraw(0, 0.4))}
				d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
			/>
		</motion.g>
	),
});
