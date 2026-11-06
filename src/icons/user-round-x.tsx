import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const head = pose(
	{ y: [0, 0.9, -2.4, 0], x: [0, 0, 0.3, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.32, 1], ease: ["easeInOut", snap, springy] },
);
const shoulders = pose(
	{ y: [0, 0, -1.2, 0] },
	{ duration: 0.72, times: [0, 0.24, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

const strike = pose({ scale: [1, 0.89, 1] }, { duration: 0.72, times: [0, 0.14, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "user-round-x",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M2 21a8 8 0 0 1 11.873-7" />
			<motion.circle {...part(head)} cx="10" cy="8" r="5" />
			<motion.g {...part(strike)} style={pivot(19.5, 19.5)}>
				<motion.path {...part(redraw(0.05, 0.35))} d="m17 17 5 5" />
				<motion.path {...part(redraw(0.22, 0.35))} d="m22 17-5 5" />
			</motion.g>
		</>
	),
});
