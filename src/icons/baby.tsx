import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const giggle = pose(
	{ rotate: [0, -12, 8, 0] },
	{ duration: 0.72, times: [0, 0.25, 0.5, 1], ease: ["easeInOut", "easeInOut", rubber] },
);
const squint = pose(
	{ y: [0, 0, -1.5, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.3, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "baby",
	render: (part) => (
		<motion.g {...part(giggle)} style={pivot(12, 21)}>
			<motion.path {...part(redraw(0.12, 0.4))} d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
			<motion.g {...part(squint)}>
				<path d="M15 12h.01" />
				<path d="M9 12h.01" />
			</motion.g>
			<path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
		</motion.g>
	),
});
