import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const scribble = pose(
	{ x: [0, -2, 2, -1, 0], y: [0, -1, 1, 0, 0], rotate: [0, -12, 8, -6, 0] },
	{ duration: 0.65, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "pencil-ruler",
	render: (part) => (
		<>
			<path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
			<motion.path {...part(redraw(0.1, 0.4))} d="m8 6 2-2" />
			<motion.path {...part(redraw(0.25, 0.4))} d="m18 16 2-2" />
			<path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
			<motion.g {...part(scribble)} style={pivot(3, 21)}>
				<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
				<path d="m15 5 4 4" />
			</motion.g>
		</>
	),
});
