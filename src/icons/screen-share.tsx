import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, springy } from "../helpers.ts";

const fly = pose(
	{ x: [0, 5, -5, 0], y: [0, -5, 5, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.28, 0.29, 1], ease: ["easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "screen-share",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
			<path d="M8 21h8" />
			<path d="M12 17v4" />
			<motion.g {...part(fly)}>
				<path d="m17 8 5-5" />
				<path d="M17 3h5v5" />
			</motion.g>
		</motion.g>
	),
});
