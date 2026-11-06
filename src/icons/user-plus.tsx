import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, rubber, snap, springy } from "../helpers.ts";

const head = pose({ y: [0, -2.4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const shoulders = pose({ y: [0, -0.9, 0] }, { duration: 0.7, delay: 0.04, times: [0, 0.25, 1], ease: [snap, springy] });

const nod = pose(
	{ rotate: [0, -12, 0], scale: [1, 0.91, 1] },
	{ duration: 0.7, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "user-plus",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<motion.circle {...part(head)} cx="9" cy="7" r="4" />
			<motion.g {...part(nod)} style={centered}>
				<line x1="19" x2="19" y1="8" y2="14" />
				<line x1="22" x2="16" y1="11" y2="11" />
			</motion.g>
		</>
	),
});
