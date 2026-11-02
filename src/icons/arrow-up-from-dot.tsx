import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dash = pose(
	{ y: [0, 2, -10, 8, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);
const kick = pose(
	{ y: [0, 0, 2, 0] },
	{ duration: 0.65, times: [0, 0.1, 0.18, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "arrow-up-from-dot",
	render: (part) => (
		<>
			<motion.g {...part(dash)}>
				<path d="m5 9 7-7 7 7" />
				<path d="M12 16V2" />
			</motion.g>
			<motion.circle {...part(kick)} cx="12" cy="21" r="1" />
		</>
	),
});
