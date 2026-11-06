import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const lean = pose(
	{ rotate: [0, 0, 12, 0], y: [0, -1.8, -0.6, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "library-big",
	render: (part) => (
		<>
			<motion.g {...part(jelly(0.38, 0.7))} style={edge(0.5, 1)}>
				<rect height="18" rx="1" width="8" x="3" y="3" />
				<path d="M7 3v18" />
			</motion.g>
			<motion.path
				{...part(lean)}
				d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
				style={pivot(18, 21)}
			/>
		</>
	),
});
