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
	name: "user-x",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<motion.circle {...part(head)} cx="9" cy="7" r="4" />
			<motion.g {...part(strike)} style={pivot(19.5, 10.5)}>
				<motion.line {...part(redraw(0.05, 0.35))} x1="17" x2="22" y1="8" y2="13" />
				<motion.line {...part(redraw(0.22, 0.35))} x1="22" x2="17" y1="8" y2="13" />
			</motion.g>
		</>
	),
});
