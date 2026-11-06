import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const blast = pose(
	{ x: [0, -1.2, 0.6, 0], rotate: [0, 6, -9.6, 0], scale: [1, 0.94, 1.09, 1] },
	{ duration: 0.75, times: [0, 0.16, 0.3, 1], ease: ["easeInOut", snap, ring] },
);
const handle = pose(
	{ rotate: [0, 0, 13.2, 0] },
	{ duration: 0.75, times: [0, 0.22, 0.4, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "megaphone",
	render: (part) => (
		<motion.g {...part(blast)} style={pivot(6, 12)}>
			<path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
			<motion.path
				{...part(handle)}
				d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"
				style={pivot(8, 14)}
			/>
			<motion.path {...part(redraw(0.24, 0.4))} d="M8 6v8" />
		</motion.g>
	),
});
