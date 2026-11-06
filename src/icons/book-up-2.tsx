import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] },
);
const rise = pose(
	{ y: [0, 0.96, -4.8, 3.84, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const trail = pose(
	{ y: [0, 0.96, -4.8, 3.84, 0], opacity: [1, 1, 0, 0, 1] },
	{
		duration: 0.65,
		delay: 0.06,
		times: [0, 0.15, 0.35, 0.36, 1],
		ease: ["easeInOut", "easeIn", "easeInOut", springy],
	},
);

export default createAnimatedIcon({
	name: "book-up-2",
	render: (part) => (
		<motion.g {...part(lift)} style={edge(0.5, 1)}>
			<motion.g {...part(rise)}>
				<path d="M12 13V7" />
				<path d="m9 10 3-3 3 3" />
			</motion.g>
			<motion.path {...part(trail)} d="m9 5 3-3 3 3" />
			<path d="M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
			<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" />
		</motion.g>
	),
});
