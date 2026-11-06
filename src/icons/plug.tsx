import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const push = pose(
	{ y: [0, 1.2, -2.4, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);
const prongs = pose(
	{ y: [0, 0, -1.5, 0] },
	{ duration: 0.7, times: [0, 0.3, 0.44, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "plug",
	render: (part) => (
		<motion.g {...part(push)}>
			<path d="M12 22v-5" />
			<motion.g {...part(prongs)}>
				<path d="M9 8V2" />
				<path d="M15 8V2" />
			</motion.g>
			<path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
		</motion.g>
	),
});
