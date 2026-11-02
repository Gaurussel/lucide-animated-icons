import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const scribble = pose(
	{ x: [0, -2, 2, -1, 0], y: [0, -1, 1, 0, 0], rotate: [0, -12, 8, -6, 0] },
	{ duration: 0.72, times: [0, 0.15, 0.3, 0.45, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "square-pen",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.05, 0.6))} d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
			<motion.path
				{...part(scribble)}
				d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
				style={pivot(9, 15)}
			/>
		</>
	),
});
