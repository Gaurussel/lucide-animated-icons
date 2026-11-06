import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const head = pose(
	{ y: [0, 0.9, -2.4, 0], x: [0, 0, 0.3, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const shoulders = pose(
	{ y: [0, 0, -1.2, 0] },
	{ duration: 0.72, times: [0, 0.24, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "user-round",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M20 21a8 8 0 0 0-16 0" />
			<motion.circle {...part(head)} cx="12" cy="8" r="5" />
		</>
	),
});
