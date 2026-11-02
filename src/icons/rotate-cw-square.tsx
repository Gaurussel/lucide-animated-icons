import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const whip = pose(
	{ rotate: [0, -25, 360] },
	{ duration: 0.65, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);
const tug = pose(
	{ rotate: [0, 0, 14, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "rotate-cw-square",
	render: (part) => (
		<>
			<motion.g {...part(whip)} style={pivot(12, 12.5)}>
				<path d="M12 5H6a2 2 0 0 0-2 2v3" />
				<path d="m9 8 3-3-3-3" />
			</motion.g>
			<motion.path
				{...part(tug)}
				d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
				style={pivot(12, 12.5)}
			/>
		</>
	),
});
