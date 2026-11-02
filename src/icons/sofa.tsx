import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const lean = pose(
	{ rotate: [0, -18, 0], y: [0, -2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "sofa",
	render: (part) => (
		<>
			<motion.g {...part(lean)} style={pivot(12, 13)}>
				<path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
				<path d="M12 4v9" />
			</motion.g>
			<motion.path
				{...part(jelly(0.2, 0.7))}
				d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
				style={edge(0.5, 1)}
			/>
			<path d="M4 18v2" />
			<path d="M20 18v2" />
		</>
	),
});
