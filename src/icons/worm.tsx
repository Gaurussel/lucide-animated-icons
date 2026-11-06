import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const crawl = pose(
	{ x: [0, -0.6, 1.5, 0], rotate: [0, 3.6, -8.4, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const tail = (degrees: number) =>
	pose(
		{ rotate: [0, 0, degrees, 0] },
		{ duration: 0.72, times: [0, 0.24, 0.36, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "worm",
	render: (part) => (
		<motion.g {...part(crawl)} style={pivot(12, 20)}>
			<motion.path {...part(tail(-35))} d="m19 12-1.5 3" style={pivot(17.5, 15)} />
			<motion.path {...part(tail(35))} d="M19.63 18.81 22 20" style={pivot(19.63, 18.81)} />
			<motion.path
				{...part(redraw(0.06, 0.6))}
				d="M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"
			/>
		</motion.g>
	),
});
