import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const flood = pose(
	{ y: [0, 2.4, -0.9, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", snap, springy] },
);
const axis = pose(
	{ x: [0, 0, -0.9, 0], y: [0, 0, 0.9, 0] },
	{ duration: 0.7, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "chart-area",
	render: (part) => (
		<>
			<motion.path {...part(axis)} d="M3 3v16a2 2 0 0 0 2 2h16" />
			<motion.g {...part(flood)}>
				<motion.path
					{...part(redraw(0.1, 0.5))}
					d="M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
				/>
			</motion.g>
		</>
	),
});
