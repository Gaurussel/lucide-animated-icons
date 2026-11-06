import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const star = pose(
	{ rotate: [0, 3.62, 0], scale: [1, 0.82, 1] },
	{ duration: 0.7, times: [0, 0.15, 1], ease: ["easeInOut", springy], reset: true },
);

const jump = pose(
	{ y: [0, -3, 0, 0] },
	{ duration: 0.7, times: [0, 0.22, 0.42, 1], ease: [snap, "easeIn", "easeInOut"] },
);

export default createAnimatedIcon({
	name: "regex",
	render: (part) => (
		<>
			<motion.g {...part(star)} style={pivot(17, 8)}>
				<path d="M17 3v10" />
				<path d="m12.67 5.5 8.66 5" />
				<path d="m12.67 10.5 8.66-5" />
			</motion.g>
			<motion.g {...part(jump)}>
				<motion.path
					{...part(jelly(0.42, 0.7))}
					d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"
					style={edge(0.5, 1)}
				/>
			</motion.g>
		</>
	),
});
