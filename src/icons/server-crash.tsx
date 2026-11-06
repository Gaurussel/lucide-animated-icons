import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const jolt = (direction: number) =>
	pose(
		{ y: [0, 0, 3 * direction, 0], rotate: [0, 0, 5 * direction, 0] },
		{ duration: 0.72, times: [0, 0.22, 0.32, 1], ease: ["easeInOut", "easeIn", ring] },
	);
const strike = pose(
	{ y: [0, -3.6, 0], opacity: [1, 0, 1] },
	{ duration: 0.3, times: [0, 0.01, 1], ease: ["easeInOut", snap] },
);

export default createAnimatedIcon({
	name: "server-crash",
	render: (part) => (
		<>
			<motion.g {...part(jolt(-1))} style={pivot(12, 6)}>
				<path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
				<path d="M6 6h.01" />
			</motion.g>
			<motion.g {...part(jolt(1))} style={pivot(12, 18)}>
				<path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
				<path d="M6 18h.01" />
			</motion.g>
			<motion.g {...part(strike)}>
				<motion.path {...part(redraw(0, 0.4))} d="m13 6-4 6h6l-4 6" />
			</motion.g>
		</>
	),
});
