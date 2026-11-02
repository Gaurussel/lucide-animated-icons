import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const push = pose(
	{ y: [0, 2, -4, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);
const prongs = pose(
	{ y: [0, 0, -2.5, 0] },
	{ duration: 0.7, times: [0, 0.3, 0.44, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "plug-2",
	render: (part) => (
		<motion.g {...part(push)}>
			<motion.g {...part(prongs)}>
				<path d="M9 2v6" />
				<path d="M15 2v6" />
			</motion.g>
			<path d="M12 17v5" />
			<path d="M5 8h14" />
			<path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
		</motion.g>
	),
});
