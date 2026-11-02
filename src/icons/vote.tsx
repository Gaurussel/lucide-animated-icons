import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, redraw, snap, springy } from "../helpers.ts";

const cast = pose(
	{ y: [0, -5, -5, 1, 0] },
	{ duration: 0.72, times: [0, 0.14, 0.3, 0.42, 1], ease: [snap, "easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "vote",
	render: (part) => (
		<>
			<motion.g {...part(cast)}>
				<motion.path {...part(redraw(0.08, 0.3))} d="m9 12 2 2 4-4" />
			</motion.g>
			<motion.path
				{...part(jelly(0.42, 0.72))}
				d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(redraw(0.36, 0.36))} d="M22 19H2" />
		</>
	),
});
