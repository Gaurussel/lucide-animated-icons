import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const gust = pose(
	{ rotate: [0, 4.8, -13.2, 0] },
	{ duration: 0.75, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", snap, ring] },
);
const ruffle = pose(
	{ scale: [1, 1, 1.07, 1], rotate: [0, 0, 6, 0] },
	{ duration: 0.75, times: [0, 0.24, 0.42, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "leafy-green",
	render: (part) => (
		<motion.g {...part(gust)} style={pivot(2, 22)}>
			<motion.path
				{...part(ruffle)}
				d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
				style={pivot(2, 22)}
			/>
			<motion.path {...part(redraw(0.2, 0.45))} d="M2 22 17 7" />
		</motion.g>
	),
});
