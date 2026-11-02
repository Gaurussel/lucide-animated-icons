import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dash = pose(
	{ x: [0, -2, 10, -8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const kick = pose(
	{ x: [0, 0, -2, 0] },
	{ duration: 0.65, times: [0, 0.1, 0.18, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "arrow-right-from-line",
	render: (part) => (
		<>
			<motion.g {...part(dash)}>
				<path d="M21 12H7" />
				<path d="m15 18 6-6-6-6" />
			</motion.g>
			<motion.path {...part(kick)} d="M3 5v14" />
		</>
	),
});
