import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const gust = pose(
	{ rotate: [0, 8, -24, 0] },
	{ duration: 0.75, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", snap, ring] },
);
const blade = pose(
	{ rotate: [0, 0, 12, 0] },
	{ duration: 0.75, times: [0, 0.24, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "leaf",
	render: (part) => (
		<motion.g {...part(gust)} style={pivot(2, 21)}>
			<motion.path
				{...part(blade)}
				d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
				style={pivot(9, 17)}
			/>
			<motion.path {...part(redraw(0.2, 0.45))} d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
		</motion.g>
	),
});
