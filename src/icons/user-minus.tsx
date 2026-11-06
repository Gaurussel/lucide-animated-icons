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

const away = pose(
	{ x: [0, 0, 3.6, -3, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.72, times: [0, 0.2, 0.36, 0.37, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "user-minus",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<motion.circle {...part(head)} cx="9" cy="7" r="4" />
			<motion.line {...part(away)} x1="22" x2="16" y1="11" y2="11" />
		</>
	),
});
