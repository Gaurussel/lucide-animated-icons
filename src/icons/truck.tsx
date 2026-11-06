import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const drive = pose(
	{ x: [0, -2, 14, -12, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.72, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const lean = pose(
	{ rotate: [0, 0, -4.2, -4.2, 5.4, 0] },
	{
		duration: 0.72,
		times: [0, 0.1, 0.25, 0.39, 0.6, 1],
		ease: ["easeInOut", "easeInOut", "easeInOut", "easeOut", springy],
	},
);

export default createAnimatedIcon({
	name: "truck",
	render: (part) => (
		<motion.g {...part(drive)}>
			<motion.g {...part(lean)} style={pivot(12, 18)}>
				<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
				<path d="M15 18H9" />
				<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
			</motion.g>
			<circle cx="17" cy="18" r="2" />
			<circle cx="7" cy="18" r="2" />
		</motion.g>
	),
});
