import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring } from "../helpers.ts";

const twist = pose(
	{ scaleX: [1, -0.2, 1, 1] },
	{ duration: 0.75, times: [0, 0.3, 0.5, 1], ease: ["easeInOut", "easeIn", "easeOut"] },
);
const halt = pose(
	{ rotate: [0, 0, -6, 0] },
	{ duration: 0.75, times: [0, 0.5, 0.58, 1], ease: ["easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "dna-off",
	render: (part) => (
		<>
			<motion.g {...part(halt)} style={pivot(12, 12)}>
				<motion.g {...part(twist)} style={pivot(12, 12)}>
					<path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
					<path d="m17 6-2.891-2.891" />
					<path d="M2 15c3.333-3 6.667-3 10-3" />
					<path d="m20 9 .891.891" />
					<path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
					<path d="M3.109 14.109 4 15" />
					<path d="m6.5 12.5 1 1" />
					<path d="m7 18 2.891 2.891" />
					<path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
				</motion.g>
			</motion.g>
			<motion.path {...part(redraw(0.3, 0.3))} d="m2 2 20 20" />
		</>
	),
});
