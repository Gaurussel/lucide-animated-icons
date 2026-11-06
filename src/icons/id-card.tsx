import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const flash = pose(
	{ y: [0, -1.8, 0], rotate: [0, -6, 0] },
	{ duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] },
);
const nod = pose({ y: [0, -1.5, 0] }, { duration: 0.6, delay: 0.1, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "id-card",
	render: (part) => (
		<motion.g {...part(flash)} style={pivot(2, 19)}>
			<motion.path {...part(redraw(0.15, 0.4))} d="M16 10h2" />
			<motion.path {...part(redraw(0.22, 0.4))} d="M16 14h2" />
			<path d="M6.17 15a3 3 0 0 1 5.66 0" />
			<motion.circle {...part(nod)} cx="9" cy="11" r="2" />
			<rect height="14" rx="2" width="20" x="2" y="5" />
		</motion.g>
	),
});
