import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring } from "../helpers.ts";

const boom = pose(
	{ x: [0, 0.6, -1.5, 0], rotate: [0, 3.6, -7.2, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.26, 1], ease: ["easeInOut", "easeIn", ring] },
);

export default createAnimatedIcon({
	name: "volume",
	render: (part) => (
		<motion.g {...part(boom)} style={pivot(11, 12)}>
			<motion.path
				{...part(redraw(0.1, 0.55))}
				d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
			/>
		</motion.g>
	),
});
