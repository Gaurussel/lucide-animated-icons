import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const turn = pose(
	{ x: [0, -0.9, -0.9, 0], y: [0, 0.9, 0.9, 0], rotate: [0, 0, -36, 0] },
	{ duration: 0.75, times: [0, 0.18, 0.4, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "key-square",
	render: (part) => (
		<motion.g {...part(turn)} style={pivot(15, 9)}>
			<path d="M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z" />
			<motion.path {...part(redraw(0.3, 0.3))} d="m14 7 3 3" />
			<path d="m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814" />
		</motion.g>
	),
});
