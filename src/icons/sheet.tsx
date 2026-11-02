import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, springy } from "../helpers.ts";

const drop = (delay: number) =>
	pose(
		{ pathLength: [1, 0, 1], y: [0, -6, 0] },
		{ duration: 0.5, delay, times: [0, 0.01, 1], ease: ["easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "sheet",
	render: (part) => (
		<>
			<motion.rect
				{...part(jelly(0.55, 0.75))}
				height="18"
				rx="2"
				ry="2"
				style={edge(0.5, 1)}
				width="18"
				x="3"
				y="3"
			/>
			<motion.line {...part(redraw(0, 0.35))} x1="3" x2="21" y1="9" y2="9" />
			<motion.line {...part(redraw(0.08, 0.35))} x1="3" x2="21" y1="15" y2="15" />
			<motion.line {...part(drop(0.2))} x1="9" x2="9" y1="9" y2="21" />
			<motion.line {...part(drop(0.28))} x1="15" x2="15" y1="9" y2="21" />
		</>
	),
});
