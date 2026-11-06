import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, springy } from "../helpers.ts";

const dive = pose(
	{ y: [0, -1.8, 3, 0], opacity: [1, 1, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.36, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "pocket",
	render: (part) => (
		<>
			<motion.path
				{...part(jelly(0.36, 0.7))}
				d="M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(dive)}>
				<motion.path {...part(redraw(0.36, 0.3))} d="m8 10 4 4 4-4" />
			</motion.g>
		</>
	),
});
