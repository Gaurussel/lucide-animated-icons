import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const chop = pose(
	{ rotate: [0, -15, 7.2, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", "easeIn", springy] },
);
const quiver = pose(
	{ rotate: [0, 0, 8.4, 0] },
	{ duration: 0.72, times: [0, 0.42, 0.5, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "axe",
	render: (part) => (
		<motion.g {...part(chop)} style={pivot(4, 20)}>
			<path d="m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9" />
			<motion.path
				{...part(quiver)}
				d="M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z"
				style={pivot(13, 10)}
			/>
		</motion.g>
	),
});
