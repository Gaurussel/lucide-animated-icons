import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const kick = pose(
	{ rotate: [0, 0, -6, 0], y: [0, 0, -0.9, 0] },
	{ duration: 0.75, times: [0, 0.4, 0.52, 1], ease: ["easeInOut", snap, springy] },
);
const axis = pose(
	{ x: [0, 0, -0.9, 0], y: [0, 0, 0.9, 0] },
	{ duration: 0.7, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "chart-line",
	render: (part) => (
		<>
			<motion.path {...part(axis)} d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.g {...part(kick)} style={pivot(7, 13)}>
				<motion.path {...part(redraw(0, 0.35))} d="m19 9-5 5-4-4-3 3" />
			</motion.g>
		</>
	),
});
