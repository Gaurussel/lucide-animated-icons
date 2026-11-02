import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 0, -5, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const outOf = pose(
	{ x: [0, -7, 4, 0], opacity: [1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.28, 0.29, 1], ease: ["easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "file-output",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" />
			<path d="M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" />
			<motion.g {...part(outOf)}>
				<path d="m5 11-3 3" />
				<path d="m5 17-3-3h10" />
			</motion.g>
		</motion.g>
	),
});
