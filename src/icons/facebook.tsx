import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber } from "../helpers.ts";

const wave = pose(
	{ rotate: [0, 3.6, -9.6, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", "easeOut", rubber] },
);

export default createAnimatedIcon({
	name: "facebook",
	render: (part) => (
		<motion.g {...part(wave)} style={pivot(12, 22)}>
			<motion.path
				{...part(redraw(0.05, 0.5))}
				d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
			/>
		</motion.g>
	),
});
