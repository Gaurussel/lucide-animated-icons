import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const fall = (direction: number) =>
	pose(
		{ x: [0, 0, 2 * direction, 0], y: [0, 0, 3, 0], rotate: [0, 0, 12 * direction, 0] },
		{ duration: 0.7, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
	);

export default createAnimatedIcon({
	name: "star-off",
	render: (part) => (
		<>
			<motion.path
				{...part(fall(-1))}
				d="M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"
				style={pivot(12, 12)}
			/>
			<motion.path {...part(fall(1))} d="M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" style={pivot(12, 12)} />
			<motion.line {...part(redraw(0, 0.45))} x1="2" x2="22" y1="2" y2="22" />
		</>
	),
});
